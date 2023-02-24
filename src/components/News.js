import React, { useState, useEffect } from 'react';
import '../App.css';
import { Predicates } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Noticias } from '../models';


function NewsFeed() {
        const [newsData, setNewsData] = useState([]);
        useEffect(() => {
            async function getArticles() {
                try{
                    const models = await DataStore.query(Noticias, Predicates.ALL);
                    console.log(models)
                    const news = models.map((newsItem) => 
                    <div className='newsItem' key={newsItem.id}>
                        <img src={newsItem.imagen}/>
                        <div className='container'>
                            <h2>{newsItem.titulo}</h2>
                            <p>{newsItem.contenido}</p>
                        </div>
                    </div>);
                    setNewsData(news);

                } catch(err){
                    console.log('Error cargando las noticias', err)
                }  
            }
            getArticles();
        });

        return (
            <div className='newsFeed'>
                {newsData}
            </div>
        )};

 export default NewsFeed;
