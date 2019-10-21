import React, { Component } from 'react';

class Buscador extends Component {

    leerDatoS = (e) => {

        const termino = e.target.value;
        //Lo enviamos por props hacia component principal
        this.props.busquedaEs( termino )
    }            
    
    render() {
        
        return (
            <div className="container-fluid">
                {/* <!-- Page-Title --> */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <form className="float-right app-search">
                                <input type="text" placeholder="Buscar..." className="form-control" onChange = { this.leerDatoS }></input>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                            <h4 className="page-title"> <i className="dripicons-list"></i>Estudiantes</h4>
                        </div>
                    </div>
                </div>
                {/* <!-- end page title end breadcrumb --> */}

            </div>
        );
    }

       
    
}

export default Buscador;