import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';
import metadata from './block.json';


export const name = "selleads/section";

export const settings = {
	title: __( 'Selleads - sekcja elementów' ),
	description: __( 'Element, który tworzy zbiornik dla elementów w nim umieszczonych' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
    ],
    "category": "design",
	"attributes": {
		"columns": {
			"type": "number",
			"default": "2"
		},
		"colorParent": {
			"type": "string"
		},
		"colorColumns": {
			"type": "string"
		}, 
		"radiusParent": {
			"type": "number"
		}, 
		"radiusColumns": {
			"type": "number"
		}, 
		"paddingParent": {
			"type": "number",
			"default": 0
		}, 
		"paddingColumns": {
			"type": "number",
			"default": 0
		}
	},
	"supports": {
        "anchor": true,
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
