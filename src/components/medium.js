//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
import React, {useEffect, useState} from 'react';
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

             console.log(myPost.items);

             setPosts(myPost.items);
        }

        getMedium();
    
    },[])

    return(
        <div className="max-w-4xl mx-auto overflow-x-auto"> 
        <div className="flex mt-8">
            {
                posts.length > 0 && posts.map( (pos) => {
                    return(
                        <div >
                             <Postmedium pos={pos}/>
                        </div>
                    )
                })
            }
           
        </div>
    </div>
    )
}
