import colors from '../.././colors';

import {
	BlockControls,
	BlockIcon,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	withColors,
	ColorPalette,
	ColorPicker,
	RichText
} from '@wordpress/block-editor';

import {
	BaseControl,
	Button,
	FocalPointPicker,
	PanelBody,
	PanelRow,
	FontSizePicker,
	RangeControl,
	ResizableBox,
	ToggleControl,
	withNotices,
	ToolbarButton,
	Toolbar
} from '@wordpress/components';

import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { useState, Fragment, useEffect, useRef, } from '@wordpress/element';

import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { compose, withInstanceId, useInstanceId, createHigherOrderComponent} from '@wordpress/compose';

export default function BackgroundColor(props) {



	console.log(props);

	// const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	// useEffect( () => {
	// 	updateBlockAttributes( clientId, {
	// 		backgroundColor: 'pink'
	// 	})
	// }, []);

	// useSelect( (select) => {

    //     let parents = select('core/block-editor').getBlock(clientId);
	// 	console.log(parents);
        
	// },[clientId]);

    return (
        <>
            <ColorPalette
				label="Kolor tła zbiornika"
				colors={ colors }
			/>
        </>
    )
}
