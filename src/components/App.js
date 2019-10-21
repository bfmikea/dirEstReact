import React, { Component } from 'react';
import Header from './Header';
import Estudiantes from './Estudiantes';
import Footer from './Footer';

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            estudiantes: [],
            estudiantesPag: [],
            mailEstudiantes: [],
            cuotaEstudiantes: [],
            terminoBusqueda: '',
            cargando: true,
            pagina:0
                                   
        }
    }

    componentDidMount() {
        this.cargarEstudiantesPag(); 
        this.cargarEstudiantes();   
        this.cargarMailEstudiantes();
        this.cargarCuotaEstudiantes();     
                   
    }

    cargarEstudiantes = () => {

        let url = `http://localhost:3003/sigenu/students`;
        fetch(url)
            .then(respuesta => {
                this.setState({
                    cargando: true,   
                })
                return respuesta.json();

         }).then(estudiantes => {

                setTimeout(() => {
                    this.setState({
                        estudiantes: estudiantes,
                        cargando: false
                    });

                }, 3500);
            });
    }
    cargarMailEstudiantes = () => {

        let url = `http://localhost:3003/sigsti/students`;
        fetch(url)
            .then(respuesta => {
                this.setState({
                    cargando: true 
                })
                return respuesta.json();

         }).then(estudiantes => {

                setTimeout(() => {
                    this.setState({
                        mailEstudiantes: estudiantes,
                        cargando: false
                        
                    });

                }, 3000);
            });
    }

    cargarCuotaEstudiantes = () => {
        let url = `http://cuota.com`;
        let iframe, filas;
        let cuota = [];
        
        fetch(url)
            .then(respuesta => {
                this.setState({
                    cargando: true 
                })
                return respuesta.text();
            })
            .then(estudiantes => {
                //console.log(estudiantes);
                document.getElementById('hiddenIframe').contentWindow.document.body.innerHTML = estudiantes;
                iframe = document.getElementsByTagName("iframe")[0].contentDocument;
                filas = iframe.querySelectorAll('tr');
                //console.log(filas);
                filas.forEach((fila, index ) => {
                    
                    cuota[index]=fila.innerText
                    
                })
                this.setState({
                    cuotaEstudiantes:cuota,
                    cargando: false
                    
                });
                //console.log(filas);
            })
    }
    
    
    cargarEstudiantesPag = () => {

        const pagina = this.state.pagina;
        
        let url = `http://localhost:3003/sigenu/students/num?num=9&page=${pagina*8}`;
        fetch(url)
            .then(respuesta => {
                this.setState({
                    cargando: true,   
                })
                return respuesta.json();

         }).then(estudiantes => {

                setTimeout(() => {
                    this.setState({
                        estudiantesPag: estudiantes,
                        cargando: false
                    });

                }, 2500);
            });
    }

    busquedaEstudiante = ( busqueda ) =>{
        if( busqueda.length > 2 ){
            this.setState({
                terminoBusqueda: busqueda,
                pagina:1
            })
        }else{
            this.setState({
                terminoBusqueda:''
            })

        }
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina;
        pagina = pagina - 1;
        if (pagina > 0) {
            this.setState({
                pagina
            }, () => {
                this.cargarEstudiantesPag();
            })
        }
    }

    paginaSiguiente = () => {
        let pagina = this.state.pagina
        pagina = pagina + 1;
        this.setState({
            pagina
        }, () => {
            this.cargarEstudiantesPag();
        })
    }

       
    render() {
        let estudiantes = [...this.state.estudiantes];
        let cargarEstudiantesPag = [...this.state.estudiantesPag]; 
        let cargarMailEstudiantes = [...this.state.mailEstudiantes];
        let cargarCuotaEstudiantes = [...this.state.cuotaEstudiantes];
        let busqueda = this.state.terminoBusqueda;
        let cargando = this.state.cargando;
        let resultado, resultadoBus;
        
        
        if(cargando){
            resultado = <div className="sk-wave">
							<div className="sk-rect sk-rect1"></div>
							<div className="sk-rect sk-rect2"></div>
							<div className="sk-rect sk-rect3"></div>
							<div className="sk-rect sk-rect4"></div>
							<div className="sk-rect sk-rect5"></div>
						</div>
        }
        else{
            resultado = 
                <Estudiantes
                    estudiantes = { cargarEstudiantesPag }
                    mailEstudiantes= { cargarMailEstudiantes }
                    cuotaEstudiantes={ cargarCuotaEstudiantes }
                    paginaAnterior = { this.paginaAnterior }
                    paginaSiguiente = { this.paginaSiguiente }
                    terminoBusqueda = { this.state.terminoBusqueda }
                    cargando = { this.state.cargando } 
                />;
        }

        if (busqueda !== '') {
            resultadoBus = estudiantes.filter(estudiante =>

                (estudiante.name.toLowerCase().indexOf(busqueda.toLowerCase()) &&
                    estudiante.middle_name.toLowerCase().indexOf(busqueda.toLowerCase()) &&
                    estudiante.last_name.toLowerCase().indexOf(busqueda.toLowerCase()) &&
                    estudiante.identification.toLowerCase().indexOf(busqueda.toLowerCase())
                ) !== -1)

            resultado = 
                <Estudiantes
                    estudiantes = { resultadoBus }
                    mailEstudiantes = { cargarMailEstudiantes }
                    cuotaEstudiantes={ cargarCuotaEstudiantes }

                />;

        }
             
        return (
            <React.Fragment>
               <Header               
                    
                    busquedaEstudiantesApp = { this.busquedaEstudiante }      
               
               />
               
               { resultado }
               
               <Footer textFooter = '© 2018 ISMMM - Departamento de Informatización.'/>

            </React.Fragment>
        );
    }
}

export default App;