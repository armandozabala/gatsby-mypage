
import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Post from './post';

export default () => {

    /*const data = useStaticQuery(graphql`query MyQuery {
        codigofacilitoJson {
          data {
            email
            courses {
              progress
              title
            }
          }
        }
      }`)

    console.log(data);*/

    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                 
                 <Post/>

                 <h2 className="text-3xl font-bold text-center">Mis Cursos</h2>
                 <div className="flex mt-8">
                        <div className="shadow p-4 bg-white mr-4 rounded">
                             <h4 className="font-bold"> Mis Cursos </h4>
                             <div className="text-center">
                                 <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2"> Calificacion:</span>
                            </div>
                        </div>
                 </div>
            </div>
            </div>
        </section>
    )
}
