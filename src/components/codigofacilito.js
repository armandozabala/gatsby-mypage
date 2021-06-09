
import React from 'react';
import {  useStaticQuery, graphql } from "gatsby";
import Post from './post';

export default () => {

   const data = useStaticQuery(graphql`
   query MyQuery {
    codigofacilitoJson {
      data {
        courses {
          progress
          title
        }
      }
    }
  }
`);

  
    return(
        <section>
             <div className="max-w-4xl mx-auto overflow-x-auto"> 
            <div className="mt-24">
                <h2>Mis Certificados Online</h2>
                <div className="flex">
                    {
                        data.codigofacilitoJson.data.courses.map(course => (
                            <div className="shadow p-4 bg-white mr-4 flex-shrink-0">
                                <h4 className="font-bold"> {course.title} </h4>
                                <div className="text-center">
                                    <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progress: { course.progress }</span>
                                </div>
                            </div>
                           
                        ))
                    }

                </div>
            </div>
            </div>
        </section>
    )
}
