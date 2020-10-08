
import './edit.css'

import {
    InspectorControls,
    InnerBlocks,
    BlockControls
} from "@wordpress/block-editor";

import {
    PanelBody,
    RangeControl,
    Placeholder,
    Button,
    ColorPalette
} from "@wordpress/components";

function edit3({
    attributes,
    setAttributes
}) {

    const x = Array(5).fill('');

    return (
        <>
        <InspectorControls>
            <PanelBody>
                <div>Hello world !</div>
            </PanelBody>
        </InspectorControls>
            <div className="selleads-label--object">
                <div className="selleads-label--wrapper">
                    <div className="selleads-label--item">
                        <div className="selleads-label-dot"><span>Dot</span></div>
                        <div className="selleads-label-container">
                            <h5 className="selleads-label--header">Hello world</h5>
                            <p className="selleads-label--content">Ala ma kota, a kot ma alę</p>
                            <p className="selleads-label--content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default edit3
