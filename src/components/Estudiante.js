import React from 'react';

const Estudiante = (props) => {
    // console.log( typeof props.mailEstudiantes[0] === 'object' ? props.mailEstudiantes[0].email: 'error' );
    let usuario,cuotaActualSlice, cuotaInicial, cuotaActualTemp, cuotaActual;
    usuario = typeof props.mailEstudiantes[0] === 'object' ? `${props.mailEstudiantes[0].user_name}`: '-Sin correo-';
    //console.log(usuario);

    cuotaActualTemp = (props.cuotaEstudiantes.filter(usuarioEstudiante => (

            usuarioEstudiante.indexOf(usuario) !== -1)

    ))
    cuotaActualSlice = cuotaActualTemp.toString().slice(-10, -6);
    cuotaInicial = typeof props.mailEstudiantes[0] === 'object' && props.mailEstudiantes[0].my_cuota !== null ? (props.mailEstudiantes[0].my_cuota).slice(0, 3): '-NT-'
    cuotaActual = cuotaInicial-cuotaActualSlice;
    console.log( cuotaActualSlice);      
    
    
    
    return (
        <React.Fragment>
            <div className="col-lg-4">
                <div className="card m-b-20">
                    <div className="card-body">

                        <div className="media">
                            <img className="d-flex mr-3 rounded-circle thumb-lg" src= { props.estudianteEst.sex_fk === 'M' ? "../images/users/avatar-10.jpg" : "../images/users/avatar-12.jpg"} alt="Generic placeholder image1"></img>
                            <div className="media-body">
                                <h5 className="m-t-10 font-18 mb-1">{props.estudianteEst.name} {props.estudianteEst.middle_name} {props.estudianteEst.last_name}</h5>
                                <p className="text-muted m-b-5 mb-0">
                                {typeof props.mailEstudiantes[0] === 'object' ? `${props.mailEstudiantes[0].user_name}@${props.mailEstudiantes[0].domain_name}`: '-Sin correo-'}
                                </p>
                                <p className="text-muted font-14 font-500 font-secondary mb-0">{props.estudianteEst.national_career}</p>
                                <p className="text-muted mb-0">{props.estudianteEst.course_type}</p>
                                <p className="text-muted mb-0">{props.estudianteEst.student_type}</p>
                                                       
                            </div>
                        </div>

                        <div className="row text-center m-t-20">
                            <div className="col-4">
                                <h5 className="mb-0">{(props.estudianteEst.register_date).slice(0, 4)}</h5>
                                <p className="text-muted font-14">Matrícula</p>
                            </div>
                            <div className="col-4">
                                <h5 className="mb-0">{props.estudianteEst.native_of}</h5>
                                <p className="text-muted font-14">{ props.estudianteEst.sex_fk === 'M' ? 'Nacido' : 'Nacida'}</p>
                            </div>                            
                            <div className="col-4">
                                <h5 className={cuotaActual < 0 ? "mb-0 cexed":"mb-0"}>{ !isNaN(cuotaActual) ? `${cuotaActual} MB` : '-NT-'}</h5>
                                <p className="text-muted font-14">Internet</p>
                            </div>
                            
                        </div>

                        <ul className="social-links text-center list-inline mb-0 mt-3">
                            <li className="list-inline-item">
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a title={props.estudianteEst.phone} data-toggle="tooltip" href={props.estudianteEst.phone} data-original-title={props.estudianteEst.phone}><i className="fa fa-phone"></i></a>
                            </li>
                            
                            <li className="list-inline-item">
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="@skypename"><i className="fa fa-whatsapp"></i></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div> {/*end col*/} 
        </React.Fragment>
    );
};

export default Estudiante;