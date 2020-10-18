import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/media-text";

export const settings = {
	title: __( 'Selleads - Obraz & Tekst' ),
	description: __( 'Obraz nachodzący na ramkę w zawartością tekstową' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
    ],
    "category": "design",
	"attributes": {
        "backgroundColor": {
            type: 'string',
        },
        "borderRadius": {
            type: 'number',
            default: '0'
        },
        "padding": {
            type: "number",
            default: "25"
        },
        "content": {
            type: 'string',
            selector: 'p'
        },
        "contentFontSize": {
            type: 'number',
            selector: '14'
        },
        "imageId": {
            type: 'number'
        },
        "imageUrl": {
            type: 'string'
        },
        "transform": {
            type: "string",
            default: "normal"
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
