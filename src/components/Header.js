import React from 'react';
import ilustration from '../imgs/headmap.svg'
import Form from './contact.form';

export default () => (
        <header className="bg-gray-300">
            <div className="container mx-auto p-12 max-w-4xl">
                <div className="flex justify-center items-center">

               
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">Hola Armando Zabala</h1>
                    <p className="font-light text-xl">Soy creador de Web Developer</p>
                </div>
                <img src={ilustration} style={{height: "250px"}} alt="banner"></img>
                </div>
            <div>
                <Form/>
            </div>
          
            </div>
        </header>
    )
