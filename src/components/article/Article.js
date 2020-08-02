import React, { useState, useEffect } from 'react'

export function Article({detail}) {
    let articleDetail = {
        id: 0,
        name: '',
        title: '',
        content_genre: '',
        content: '',
        date: new Date().toUTCString()

    }
    const [article, setArticle] = useState(articleDetail);

    useEffect(() => {
        setArticle(detail);
    }, [])

    return (
        <div class="container">
            <h2>{article.title}</h2>
            <p>Name: {article.name}</p>
            <p>Date: {article.date}</p>
            <p>{article.content}</p>
        </div>
    );
}