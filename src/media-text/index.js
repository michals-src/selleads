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
        'background': [
            {
                'color': {
                    type: 'string',
                    default: '#d2dee4'
                },
                'radius': {
                    type: 'string',
                    default: '5'
                },
                'padding': {
                    type: 'string',
                    default: '25'
                },
            }
        ],
        'subtitle': [
            {
                'color': {
                    type: 'string',
                    default: '#000000'
                },
                'fontSize': {
                    type: 'string',
                    default: '18px'
                },
                'value': {
                    type: 'string',
                    selector: 'h6'
                }
            }
        ],
        'title': [
            {
                'color': {
                    type: 'string',
                    default: '#000000'
                },
                'fontSize': {
                    type: 'string',
                    default: '24px'
                },
                'value': {
                    type: 'string',
                    selector: 'h3'
                }
            }
        ],
        'paragraph': [
            {
                'color': {
                    type: 'string',
                    default: '#000000'
                },
                'fontSize': {
                    type: 'string',
                    default: '14px'
                },
                'value': {
                    type: 'string',
                    selector: 'p'
                }
            }
        ],
        'picture': [
            {
                'id': {
                    type: 'number'
                },
                'url': {
                    type: 'string'
                }
            }
        ],
        'transform': {
            'type': 'string',
            'default': 'normal'
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
