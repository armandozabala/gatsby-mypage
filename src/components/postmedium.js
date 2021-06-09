import React from 'react';

export default ({pos}) => {
    
    return(
        <div className="shadow p-8 bg-white mr-4 rounded flex-shrink-0" style={{width: '300px'}}>
            <h4>
                 {pos.title}
            </h4>
            <div className="text-center">
                <a href="" className="btn">Leer</a>
            </div>

        </div>
    )
}
