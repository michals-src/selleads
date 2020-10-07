
function ColumnsCovering() {
    return (
<div className="columns-parent" 
    style={{
        padding: 0,
        backgroundColor: 'transparent'
    }}>
            <div className="columns-container"
            style={{
                padding: 0,
                backgroundColor: 'transparent'
            }}>

                    
                    <div className="columns-item"
                         style={{
                            flex: '0 0 66.667%',
                            maxWidth: '66.667%'
                        }}
                    >
                        <div className="columns-item-container" 
                        style={{
                            padding: '30px',
                            borderRight: '250px solid #f2f2f2'
                        }}>
                            <header>
                                <h6 className="columns-item-heading is-uppercase">Lorem ipsum</h6>
                                <h5 className="columns-item-heading is-uppercase">Lorem ipsum</h5>
                            </header>
                            <div className="columns-item-content">
                                <p>
                                    The rest of it went in a doublet of fine cloth and velvet breeches and shoes to match for holidays, while on week-days he made a brave figure in his best homespun.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="columns-item"
                        style={{
                            marginLeft: '-150px'
                        }}
                    >
                        <div className="columns-item-container"
                        style={{
                            padding: '30px',
                            backgroundColor: 'transparent'
                        }}>
                            {/* <header>
                                <h6 className="columns-item-heading is-uppercase">Lorem ipsum</h6>
                                <h5 className="columns-item-heading is-uppercase">Lorem ipsum</h5>
                            </header> */}
                            <div className="columns-item-content">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80" />
                                </figure>
                                <p>
                                    The rest of it went in a doublet of fine cloth and velvet breeches and shoes to match for holidays, while on week-days he made a brave figure in his best homespun.
                                </p>
                            </div>
                        </div>
                    </div>


            </div>
        </div>
    )
}

export default ColumnsCovering
