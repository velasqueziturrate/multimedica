import React from 'react';

export default function Home() {
    return (
        <div className="presentation text-center">
            <h1>¿Qué estás buscando?</h1>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 link">
                <i className="fas fa-file-pdf"></i><a href="/prueba1">Prueba 1</a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 link">
                    <a href="/prueba2">Prueba 2</a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 link">
                    <a href="/prueba3">Prueba 3</a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 link">
                    <a href="/prueba4">Prueba 4</a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 link">
                    <a href="/prueba5">Prueba 5</a>
                </div>
            </div>
        </div>
    );
}