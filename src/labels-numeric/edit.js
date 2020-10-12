/**
 * External dependencies
 */
import classnames from 'classnames';
import { dropRight, get, map, times } from 'lodash';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	PanelBody, RangeControl, Notice, Placeholder, 
	Toolbar, ToolbarButton, ToolbarGroup, Button,
	ColorPalette
} from '@wordpress/components';

import {
	InspectorControls,
	InnerBlocks,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	__experimentalBlockVariationPicker,
	__experimentalUseBlockWrapperProps as useBlockWrapperProps,
} from '@wordpress/block-editor';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';

import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { compose, withInstanceId, useInstanceId, createHigherOrderComponent} from '@wordpress/compose';

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
import { sumBy, merge, mapValues } from 'lodash';

import './edit.css';

/**
 * Returns a column width attribute value rounded to standard precision.
 * Returns `undefined` if the value is not a valid finite number.
 *
 * @param {?number} value Raw value.
 *
 * @return {number} Value rounded to standard precision.
 */
export const toWidthPrecision = ( value ) =>
	Number.isFinite( value ) ? parseFloat( value.toFixed( 2 ) ) : undefined;

/**
 * Returns an effective width for a given block. An effective width is equal to
 * its attribute value if set, or a computed value assuming equal distribution.
 *
 * @param {WPBlock} block           Block object.
 * @param {number}  totalBlockCount Total number of blocks in Columns.
 *
 * @return {number} Effective column width.
 */
export function getEffectiveColumnWidth( block, totalBlockCount ) {
	const { width = 100 / totalBlockCount } = block.attributes;
	return toWidthPrecision( width );
}

/**
 * Returns the total width occupied by the given set of column blocks.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {number} Total width occupied by blocks.
 */
export function getTotalColumnsWidth(
	blocks,
	totalBlockCount = blocks.length
) {
	return sumBy( blocks, ( block ) =>
		getEffectiveColumnWidth( block, totalBlockCount )
	);
}

/**
 * Returns an object of `clientId` → `width` of effective column widths.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Column widths.
 */
export function getColumnWidths( blocks, totalBlockCount = blocks.length ) {
	return blocks.reduce( ( accumulator, block ) => {
		const width = getEffectiveColumnWidth( block, totalBlockCount );
		return Object.assign( accumulator, { [ block.clientId ]: width } );
	}, {} );
}

/**
 * Returns an object of `clientId` → `width` of column widths as redistributed
 * proportional to their current widths, constrained or expanded to fit within
 * the given available width.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {number}    availableWidth  Maximum width to fit within.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Redistributed column widths.
 */
export function getRedistributedColumnWidths(
	blocks,
	availableWidth,
	totalBlockCount = blocks.length
) {
	const totalWidth = getTotalColumnsWidth( blocks, totalBlockCount );
	const difference = availableWidth - totalWidth;
	const adjustment = difference / blocks.length;

	return mapValues( getColumnWidths( blocks, totalBlockCount ), ( width ) =>
		toWidthPrecision( width + adjustment )
	);
}

/**
 * Returns true if column blocks within the provided set are assigned with
 * explicit widths, or false otherwise.
 *
 * @param {WPBlock[]} blocks Block objects.
 *
 * @return {boolean} Whether columns have explicit widths.
 */
export function hasExplicitColumnWidths( blocks ) {
	return blocks.every( ( block ) =>
		Number.isFinite( block.attributes.width )
	);
}

/**
 * Returns a copy of the given set of blocks with new widths assigned from the
 * provided object of redistributed column widths.
 *
 * @param {WPBlock[]}             blocks Block objects.
 * @param {Object<string,number>} widths Redistributed column widths.
 *
 * @return {WPBlock[]} blocks Mapped block objects.
 */
export function getMappedColumnWidths( blocks, widths ) {
	return blocks.map( ( block ) =>
		merge( {}, block, {
			attributes: {
				width: widths[ block.clientId ],
			},
		} )
	);
}


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [ 'selleads/label-numeric' ];

function ColumnsEditContainer( {
	attributes,
	updateAlignment,
	updateColumns,
	clientId,
} ) {
	const { verticalAlignment } = attributes;

	const { count } = useSelect(
		( select ) => {
			return {
				count: select( 'core/block-editor' ).getBlockCount( clientId ),
			};
		},
		[ clientId ]
	);

	const classes = classnames( {
		[ `are-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment,
	} );


	return (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={ updateAlignment }
					value={ verticalAlignment }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ count }
						onChange={ ( value ) => updateColumns( count, value ) }
						min={ 2 }
						max={ Math.max( 6, count ) }
					/>
					{ count > 6 && (
						<Notice status="warning" isDismissible={ false }>
							{ __(
								'This column count exceeds the recommended amount and may cause visual breakage.'
							) }
						</Notice>
					) }
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				templateLock="all"
				allowedBlocks={ ALLOWED_BLOCKS }
				orientation="horizontal"
				__experimentalPassedProps={ {
					className: 'columns-inner-block'
				} }
				renderAppender={ false }
			/>
		</>
	);
}

const ColumnsEditContainerWrapper = withDispatch(
	( dispatch, ownProps, registry ) => ( {
		/**
		 * Update all child Column blocks with a new vertical alignment setting
		 * based on whatever alignment is passed in. This allows change to parent
		 * to overide anything set on a individual column basis.
		 *
		 * @param {string} verticalAlignment the vertical alignment setting
		 */
		updateAlignment( verticalAlignment ) {
			const { clientId, setAttributes } = ownProps;
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const { getBlockOrder } = registry.select( 'core/block-editor' );

			// Update own alignment.
			setAttributes( { verticalAlignment } );

			// Update all child Column Blocks to match
			const innerBlockClientIds = getBlockOrder( clientId );
			innerBlockClientIds.forEach( ( innerBlockClientId ) => {
				updateBlockAttributes( innerBlockClientId, {
					verticalAlignment,
				} );
			} );
		},

		/**
		 * Updates the column count, including necessary revisions to child Column
		 * blocks to grant required or redistribute available space.
		 *
		 * @param {number} previousColumns Previous column count.
		 * @param {number} newColumns      New column count.
		 */
		updateColumns( previousColumns, newColumns ) {
			const { clientId } = ownProps;
			const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
			const { getBlocks } = registry.select( 'core/block-editor' );

			let innerBlocks = getBlocks( clientId );
			const hasExplicitWidths = hasExplicitColumnWidths( innerBlocks );

			// Redistribute available width for existing inner blocks.
			const isAddingColumn = newColumns > previousColumns;

			if ( isAddingColumn && hasExplicitWidths ) {
				// If adding a new column, assign width to the new column equal to
				// as if it were `1 / columns` of the total available space.
				const newColumnWidth = toWidthPrecision( 100 / newColumns );

				// Redistribute in consideration of pending block insertion as
				// constraining the available working width.
				const widths = getRedistributedColumnWidths(
					innerBlocks,
					100 - newColumnWidth
				);

				innerBlocks = [
					...getMappedColumnWidths( innerBlocks, widths ),
					...times( newColumns - previousColumns, () => {
						return createBlock( 'selleads/column', {
							width: newColumnWidth,
						} );
					} ),
				];
			} else if ( isAddingColumn ) {
				innerBlocks = [
					...innerBlocks,
					...times( newColumns - previousColumns, () => {
						return createBlock( 'selleads/column' );
					} ),
				];
			} else {
				// The removed column will be the last of the inner blocks.
				innerBlocks = dropRight(
					innerBlocks,
					previousColumns - newColumns
				);

				if ( hasExplicitWidths ) {
					// Redistribute as if block is already removed.
					const widths = getRedistributedColumnWidths(
						innerBlocks,
						100
					);

					innerBlocks = getMappedColumnWidths( innerBlocks, widths );
				}
			}
			replaceInnerBlocks( clientId, innerBlocks, false );
		},
	} )
)( ColumnsEditContainer );

const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
	return map(
		innerBlocksTemplate,
		( [ name, attributes, innerBlocks = [] ] ) =>
			createBlock(
				name,
				attributes,
				createBlocksFromInnerBlocksTemplate( innerBlocks )
			)
	);
};



const PlaceholderWrapper2 = ({clientId}) => {

	const [columns, setColumns] = useState(2);
	const [variation, setVariation] = useState([]);
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const handleCreate = ( cols ) => {

		let tree = Array(cols).fill( ['selleads/label'] );

		for( let x = 0; x < cols; x++ ){
			tree[x] = [
				'selleads/label-numeric',
				{
					"withNumber": (x+1)
				}
			];
		}

		setVariation(tree);
		replaceInnerBlocks(
			clientId,
			createBlocksFromInnerBlocksTemplate(
				tree
			)
		);
	};

	return (
		<>
			<RangeControl
				label="Liczba etykiet"
				value={ columns }
				onChange={ ( columns ) => setColumns( columns ) }
				min={ 2 }
				max={ 10 }
			/>
			<Button onClick={() => handleCreate(columns) } isSecondary>Dodaj</Button>
		</>
	)
}


function PlaceholderWrapper( { clientId, name, setAttributes } ) {
	const { blockType, defaultVariation, variations } = useSelect(
		( select ) => {
			const {
				getBlockVariations,
				getBlockType,
				getDefaultBlockVariation,
			} = select( 'core/blocks' );

			return {
				blockType: getBlockType( name ),
				defaultVariation: getDefaultBlockVariation( name, 'block' ),
				variations: getBlockVariations( name, 'block' ),
			};
		},
		[ name ]
	);
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	return (
		<div >
			<Placeholder
                label="Dodawanie etykiet"
                instructions="Wybierz przykładowy wariant"
            >
			<div>
				<PlaceholderWrapper2 clientId={clientId} />
					{/* <Toolbar>
						<ToolbarButton
							onClick={ () => {
								replaceInnerBlocks(
									clientId,
									createBlocksFromInnerBlocksTemplate(
										[ ['selleads/column'], ['selleads/column'] ] 
									)
								)
							}}
						>
							Custome text
						</ToolbarButton>
						<ToolbarButton
							onClick={ () => {
								replaceInnerBlocks(
									clientId,
									createBlocksFromInnerBlocksTemplate(
										[ ['selleads/column'], ['selleads/column'] ] 
									)
								)
							}}
						>
							Custome text
						</ToolbarButton>
						<ToolbarButton
							onClick={ () => {
								replaceInnerBlocks(
									clientId,
									createBlocksFromInnerBlocksTemplate(
										[ ['selleads/column'], ['selleads/column'] ] 
									)
								)
							}}
						>
							Custome text
						</ToolbarButton>
						<ToolbarButton
							onClick={ () => {
								replaceInnerBlocks(
									clientId,
									createBlocksFromInnerBlocksTemplate(
										[ ['selleads/column'], ['selleads/column'] ] 
									)
								)
							}}
						>
							Custome text
						</ToolbarButton>
					</Toolbar> */}
			</div>
					
				
            </Placeholder>
			{/* <__experimentalBlockVariationPicker
				icon={ get( blockType, [ 'icon', 'src' ] ) }
				label={ get( blockType, [ 'title' ] ) }
				variations={ variations }
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
					if ( nextVariation.innerBlocks ) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(
								nextVariation.innerBlocks
							)
						);
					}
				} }
				allowSkip
			/> */}
		</div>
	);
}

const ColumnsEdit = ( props ) => {

	const { 
		backgroundColor, 
		borderRadius, 
		padding,
	} = props.attributes

	const { attributes, setAttributes } = props;

	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		( select ) =>
			select( 'core/block-editor' ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const InnerBlocks = useSelect(
		( select ) =>
			select( 'core/block-editor' ).getBlocks( clientId ),
		[ clientId ]
	);
	
	// {console.log(InnerBlocks)}

	const { updateBlock } = useDispatch('core/block-editor');
    // updateBlock(InnerBlocks[0].clientId, {
	// 	className: ['absfgvsvfsdvsdvs']
	// });

	const Component = hasInnerBlocks
		? ColumnsEditContainerWrapper
		: PlaceholderWrapper;


	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	];




	return (
	<>
		<InspectorControls>
            <PanelBody>


				<ColorPalette
					label="Kolor tła zbiornika"
					colors={ colors }
					value={ backgroundColor }
					onChange={ ( color ) => setAttributes( { backgroundColor: color } ) }
				/>

                <RangeControl
					label="Zaokrąglenie"
					value={ borderRadius }
					onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
					min={ 0 }
					max={ 50 }
				/>
                
                <RangeControl
                    label="Wgłębienie"
                    value={ padding }
                    onChange={ ( value ) => { setAttributes( { padding: value } ) } }
                    min={ 0 }
                    max={ 60 }
                />

            </PanelBody>
        </InspectorControls>
		<div className="columns-parent" 
			style={{
				padding: `${padding}px`,
				backgroundColor: backgroundColor,
				borderRadius: `${borderRadius}px`
			}}>
				<div className="columns-container">

					<Component { ...props } />
				</div>
		</div>
	</>
    )
};

// export default ColumnsEdit;
export default ColumnsEdit;