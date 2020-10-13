import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/row";

export const settings = {
	title: __( 'Selleads - Wiersz' ),
	description: __( 'Element, wiersz' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
    ],
    "category": "design",
	"attributes": {
		"columns": {
			type: "number",
			default: 1
		}
	},
	"supports": {
		"anchor": true,
		"align": ["full","wide"],
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
