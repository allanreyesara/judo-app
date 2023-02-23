import React, { useState, useEffect } from 'react';

import { DataStore } from 'aws-amplify';
import { Noticias } from '../models';


const NewsFeed = () => {
        const [newsData, setNewsData] = useState([])
    
    
        useEffect(() => {
            async function getArticles() {
                try {
                    const articles = await DataStore.query(Noticias);
                    console.log(articles);
                }catch(err){
                    console.log('Error cargando las noticias', err)
                }
            }
        })
    
        return (
            <div className='newsFeed'>
                {newsData.map((item, index) => <p key={item}>{item}</p>)}
            </div>
        )};

export default NewsFeed;