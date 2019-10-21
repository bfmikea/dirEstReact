import React from 'react';

const Footer = ( props ) => {
    return (
        <div>
            { /* Footer */}
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            { props.textFooter }
                        </div>
                    </div>
                </div>
            </footer>
            { /* End Footer */}
            
        </div>
        
    );
};

export default Footer;