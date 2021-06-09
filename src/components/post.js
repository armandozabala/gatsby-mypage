import React from 'react';

export default (props) => {

    return(
        <div>
            <h2 className="text-3xl font-bold text-center">Mis Certificados</h2>
                 <div className="flex mt-8">
                        <div className="shadow p-4 bg-white mr-4 rounded">
                             <h4 className="font-bold"> Titulo </h4>
                             <div className="text-center">
                                 <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2"> Calificacion:</span>
                            </div>
                        </div>
                 </div>
        </div>
    )

}

