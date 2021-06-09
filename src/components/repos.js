import React, { useEffect, useState } from 'react';
import repo from '../data/repo';
import fetchRepo from '../libs/fetchRepo';
import Repo from './repo';


export default () => {

     const [repos, setRepos] = useState([]);
     const [reposCount, setReposCount] = useState([]);


     useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRe;

        if(data){
            myRe = JSON.parse(data);
            setReposCount(myRe.length);
            myRe = myRe.slice(1,13);
            return setRepos(myRe)
        }
       

          const myRepos = async () => {
             myRe = await fetchRepo();
             setRepos(myRe);
             setReposCount(myRe.length)
             sessionStorage.setItem("repos",JSON.stringify(myRe));
          } 
          myRepos();

     },[])

    return (
      <div className="max-w-4xl mx-auto mt-12">
          <header className="text-center">
            <h2 className="text-3xl font-bold">Mis trabajo</h2>
            <p>Colaboraciones y contribuciones</p>
          </header>
          <ul className="repos-list">
              {
                  repos.map((repo) => {
                        return(
                            <Repo repo={repo} key={repo.id} />
                        )
                  })
              }
          </ul>
          <div className="mt-8 text-center">
                <a href="https://api.github.com/users/armandozabala/repos" className="btn" target="_blank">
                     Ver mas en Github ({ reposCount })
                </a>
          </div>
      </div>
   );
};
