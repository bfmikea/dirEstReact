import React, { Component } from 'react';
import Estudiante from './Estudiante';
import Navegacion from './Navegacion';



class Estudiantes extends Component{

    //Quito la navegación cuando se realiza 
    //una búsqueda
    mostrarNavegacion = () => {
        if(this.props.terminoBusqueda ==='' && this.props.cargando === false){
            return <Navegacion
                paginaAnterior = { this.props.paginaAnterior }
                paginaSiguiente = { this.props.paginaSiguiente }
            />
        }
    }

    obtenerCorreo = (identification) => {
        return this.props.mailEstudiantes.filter( mailEstudiantes => (
               mailEstudiantes.identification.indexOf( identification ) !== -1
        ))
        
    }

    
           
    render(){
        //console.log(this.props.cuotaEstudiantes);
        
        return(
                
            <React.Fragment>
                
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row">
                        
                                   
                                
                            { this.props.estudiantes.map( estudiante  => (
                                
                               
                                <Estudiante

                                    key = { estudiante.identification }
                                    estudianteEst = { estudiante }
                                    mailEstudiantes = { this.obtenerCorreo( estudiante.identification ) }
                                    cuotaEstudiantes = { this.props.cuotaEstudiantes }                                    
                                    
                                />))                                        
                            }
                        </div>
                            { this.mostrarNavegacion() }
                    </div>
                </div>            
            </React.Fragment>
                        
        )
    }
}

export default Estudiantes;
