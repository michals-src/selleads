import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Selleads - sekcja elementów' ),
	description: __( 'Element, który tworzy zbiornik dla elementów w nim umieszczonych' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
	],
	// icon,
	transforms,
	deprecated,
	edit,
	save,
};
