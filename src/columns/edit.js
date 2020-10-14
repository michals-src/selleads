/**
 * External dependencies
 */
import classnames from 'classnames';
import { dropRight, get, map, times } from 'lodash';

import colors from '.././colors.js';
import { plus, column, columns } from '@wordpress/icons'
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	PanelBody, RangeControl, Notice, Placeholder, 
	Toolbar, ToolbarButton, ToolbarGroup, Button,
	ColorPalette, SelectControl, 
	__experimentalNumberControl as NumberControl,
	Tooltip
} from '@wordpress/components';

import {
	InspectorControls,
	InnerBlocks,
	BlockControls,
	BlockIcon,
	BlockVerticalAlignmentToolbar,
	__experimentalBlockVariationPicker,
	__experimentalUseBlockWrapperProps as useBlockWrapperProps,
} from '@wordpress/block-editor';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { useState, Fragment, useEffect, useRef, } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';

import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { compose, withInstanceId, useInstanceId, createHigherOrderComponent} from '@wordpress/compose';

import { sumBy, merge, mapValues } from 'lodash';

import './edit.css';



const ALLOWED_BLOCKS = [ 'core/column' ];
const INNER_BLOCKS_TEMPLATE = [
    [ 'selleads/row' ]
];

/**
 * Pasek z przyborem narzędzi
 */
const ColumnToolBox = ({
	isSelected,
	isHovering,
	onClick,
	...props
}) => {

	return (
		<div>

			{ ( isSelected || isHovering ) && (
				<div style={{
					textAlign: "center",
					padding: "15px"
				}}>
				
					<Toolbar>
						<Tooltip text="Dodaj nowy wiersz">
							<ToolbarButton onClick={onClick}>
									<BlockIcon icon={ columns } />
							</ToolbarButton>
						</Tooltip>
					</Toolbar>
				
				</div>
			)}

		</div>
	)
}

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

function edit(props) {

	const {
		clientId,
		attributes,
		setAttributes,
		updateColumns
	} = props;

	const { 
		backgroundColor, 
		borderRadius, 
		padding,
	} = attributes;


	const { getInnerBlocks, hasInnerBlocks, InnerBlocksLength } = useSelect( (select) => {
		return {
			getInnerBlocks: select('core/block-editor').getBlocks( clientId ),
			hasInnerBlocks: select('core/block-editor').getBlocks( clientId ).length > 0,
			InnerBlocksLength: select('core/block-editor').getBlocks( clientId ).length,
		};
	}, [clientId]);


	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const [ columns, setColumns ] = useState(0);
	const [ type, setType ] = useState('selleads/column');

	const onUpdateColumnsHandler = (e) => {
		console.log(e);
	};

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
	
	const [ index, setIndex ] = useState(0);
	
	let x = 0;
	useEffect(() => {
		getInnerBlocks.map( (e) => {
			updateBlockAttributes(e.clientId, { index: x });
			x=x+e.innerBlocks.length;
		});
	}, [getInnerBlocks, InnerBlocksLength]);


	const onItemsCreate = () => {


		updateColumns(1,2);
		//console.log(getBlocks( clientId ));

		// replaceInnerBlocks(
		// 	clientId,
		// 	createBlocksFromInnerBlocksTemplate(
		// 		[[ 'selleads/row', {
		// 			onUpdateColumns: onUpdateColumns
		// 		} ]]
		// 	)
		// );
	};

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
				padding: `30px`,
				backgroundColor: backgroundColor,
				borderRadius: `${borderRadius}px`
			}}>
				<div className="columns-container">

				{
					hasInnerBlocks ? (
						<InnerBlocks
							templateLock="all"
							allowedBlocks={ ALLOWED_BLOCKS }
							renderAppender={ false }
						/>
					) : (
						<InnerBlocks
							templateLock="all"
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ INNER_BLOCKS_TEMPLATE }
							orientation="horizontal"
							renderAppender={ false }
						/>
					)
				}

					<ColumnToolBox onClick={() => onItemsCreate() } {...props} />

				</div>
		</div>
		</>
	)
}

export default withDispatch(
	( dispatch, ownProps, registry ) => ( {

		updateColumns( previousColumns, newColumns ) {
			const { clientId } = ownProps;
			const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
			const { getBlocks } = registry.select( 'core/block-editor' );

			let innerBlocks = getBlocks( clientId );
			
			// Redistribute available width for existing inner blocks.
			const isAddingColumn = newColumns > previousColumns;

			if ( isAddingColumn ) {
				let a = createBlock( 'selleads/row' );
				innerBlocks = [
					...innerBlocks, a
				];
			}
			replaceInnerBlocks( clientId, innerBlocks, false );
		},
	} )
)( edit );
