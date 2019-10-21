import React from 'react';
import Buscador from './Buscador';

const Header = ( props ) => {
    return (
        <React.Fragment>
            
            {/* <!-- Loader --> */}
            <iframe id="hiddenIframe"></iframe>
            <div className="header-bg">
                    {/* <!-- Navigation Bar--> */}
                <header id="topnav">
                        <div className="topbar-main">
                            <div className="container-fluid pt-4 pb-4">

                                { /* Logo container */}
                                <div className="logo">
                                    { /* Text Logo */}  
                                    <div  className="logo">
                                        Directorio ISMMM
                                    </div>
                                    { /* Image Logo */}  
                                    <a href="index.html" className="logo">
                                        <img src="/images/logo-sm.png" alt="" height="22" className="logo-small"></img>
                                        <img src="/images/logo.png" alt="" height="24" className="logo-large"></img>
                                    </a> 

                                </div>
                                { /* End Logo container */} 


                                <div className="menu-extras topbar-custom">

                                    <ul className="list-inline float-right mb-0">
                                        
                                        { /* notification */} 
                                        <li className="list-inline-item dropdown notification-list">
                                            <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="{#}" role="button"
                                            aria-haspopup="false" aria-expanded="false" >
                                                <i className="ti-bell noti-icon"></i>
                                                <span className="badge badge-info badge-pill noti-icon-badge">1</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                                                { /* item */} 
                                                <div className="dropdown-item noti-title">
                                                    <h5>Notification (3)</h5>
                                                </div>

                                                { /* item */} 
                                                <a href="/" className="dropdown-item notify-item active">
                                                    <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                                                    <p className="notify-details"><b>Your order is placed</b><small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                                                </a>

                                                { /* item */} 
                                                <a href="{ props }" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-warning"><i className="mdi mdi-message"></i></div>
                                                    <p className="notify-details"><b>New Message received</b><small className="text-muted">You have 87 unread messages</small></p>
                                                </a>

                                                { /* item */ }
                                                <a href="/" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-info"><i className="mdi mdi-martini"></i></div>
                                                    <p className="notify-details"><b>Your item is shipped</b><small className="text-muted">It is a long established fact that a reader will</small></p>
                                                </a>

                                                { /* All */} 
                                                <a href="/" className="dropdown-item notify-item">
                                                    View All
                                                </a>

                                            </div>
                                        </li>
                                        
                                        <li className="menu-item list-inline-item">
                                            { /* Mobile menu toggle */} 
                                            <a className="navbar-toggle nav-link" href="/">
                                                <div className="lines">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </a>
                                            { /* End mobile menu toggle */} 
                                        </li>

                                    </ul>
                                </div>
                                { /* end menu-extras */}  

                                <div className="clearfix"></div>

                            </div> { /* end container */} 
                        </div>
                        { /* end topbar-main */} 

                        { /* MENU Start */} 
                        <div className="navbar-custom">
                            <div className="container-fluid">
                                <div id="navigation">
                                    { /* Navigation Menu */} 
                                    <ul className="navigation-menu">

                                        {/* <li className="has-submenu">
                                            <a href="index.html"><i className="dripicons-device-desktop"></i>Dashboard</a>
                                        </li> */}

                                        <li className="has-submenu">
                                            <a href="estudiantes.html"><i className="dripicons-suitcase"></i>Estudiantes</a>
                                            
                                        </li>

                                        {/* <li className="has-submenu">
                                            <a href="trabajadores.html"><i className="fa fa-user-circle"></i>Trabajadores</a>
                                            
                                        </li>

                                        <li className="has-submenu">
                                            <a href="/"><i className="fa fa-globe"></i>Urls</a>
                                            
                                        </li>

                                        <li className="has-submenu">
                                            <a href="cumpleanos.html"><i className="fa fa-gift"></i>Cumpleaños</a>
                                            
                                        </li> */}

                                        

                                    </ul>
                                    { /* End navigation menu */}  
                                </div> { /* end #navigation */}  
                            </div> { /* end container */}  
                        </div> { /* end navbar-custom */} 
                    </header>
                    <Buscador
                    busquedaEs = { props.busquedaEstudiantesApp }
                    />
            </div>
                
        </React.Fragment>      
    );
};

export default Header;