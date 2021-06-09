//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
import React, {useEffect, useState} from 'react';
import Post from './post';
import Postmedium from './postmedium';

export default () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const data = sessionStorage.getItem('posts');
        let myPost;

        if(data){
            setPosts(JSON.parse(data));
        }


        const getMedium = async () => {
             const resp = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz');
             myPost = await resp.json();
             sessionStorage.setItem('posts',JSON.stringify(myPost));

             console.log(myPost);
             
             setPosts(myPost);
        }

        getMedium();
    
    },[])

    return(
        <div>
            <Postmedium/>
        </div>
    )
}
