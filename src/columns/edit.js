
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
	...props
}) => {

	return (
		<div>

			{ ( isSelected || isHover ) && (
				<div style={{
					textAlign: "center",
					padding: "15px"
				}}>
				
					<Toolbar>
						<Tooltip text="Dodaj nowy wiersz">
							<ToolbarButton>
									<BlockIcon icon={ columns } />
							</ToolbarButton>
						</Tooltip>
					</Toolbar>
				
				</div>
			)}

		</div>
	)
}


function edit(props) {
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

					<InnerBlocks
						templateLock="all"
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ INNER_BLOCKS_TEMPLATE }
						orientation="horizontal"
						__experimentalPassedProps={ {
							className: 'columns-inner-block'
						} }
						renderAppender={ false }
					/>

					<ColumnToolBox {...props} />

				</div>
		</div>
		</>
	)
}

export default edit
