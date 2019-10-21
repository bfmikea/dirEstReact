import React from 'react';

const Navegacion = (props) => {
    return (
        <div className="row py-5 justify-content-center">
            <button onClick = { props.paginaAnterior } type="button" className="btn btn-info mt-1 mr-2">&laquo; Anterior </button>
            <button onClick = { props.paginaSiguiente } type="button" className="btn btn-info mt-1">Siguiente &raquo;</button>

        </div>
    );
};

export default Navegacion;