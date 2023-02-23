import React, { useState, useEffect } from 'react';

import { API, Predicates } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Noticias } from '../models';


const NewsFeed = () => {
        const [newsData, setNewsData] = useState([])

        useEffect(() => {
            async function getArticles() {
                try{
                    const models = await DataStore.query(Noticias, Predicates.ALL);
                    console.log("Noticias recuperadas correctamente", models);
                    setNewsData(JSON.stringify(models, null, 5));
                } catch(err){
                    console.log('Error cargando las noticias', err)
                }  
            }

            getArticles();
        }, [newsData]);

        return (
            <div className='newsFeed'>
                
            </div>
        )};

 export default NewsFeed;
