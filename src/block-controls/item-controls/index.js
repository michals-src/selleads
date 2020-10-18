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

export default function ItemControls(props) {

    const {
        children
    } = props;
    
    return (
        <>
            <InspectorControls>
                {children}
            </InspectorControls>
        </>
    )
}
