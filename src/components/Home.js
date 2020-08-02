import React, { useState, useEffect } from 'react'
import { Article } from './article/Article';

export function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let result = await fetch("/posts");
                let data = await result.json();
                setArticles(data);
            } catch(err) {
                console.log(err);
            }
        })();
    }, []);
    return (
        <div class="container">
            {articles.map((article) => 
                <Article key={article.id} detail={article}/>
            )}
        </div>
    );
}