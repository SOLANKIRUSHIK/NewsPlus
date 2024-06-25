  import React from 'react';
  import { Link } from 'react-router-dom';

  const Newsitem = ({ article }) => {
    return (
      <>
    
          <div className="card">
          <p  id="sourcename">{article.source.name}</p>
            <div className="image">
    
              <img src={article.urlToImage?article.urlToImage:"https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=" } alt={article.title}  />
            </div>

            <div className="content">
              <Link to={article.url}   target="_blank">
                <span className="title">
                  {article.title?article.title:" "}
                </span>
              </Link>
              <p className="desc">
                {article.description}
              </p>
              <p className="author"><b>Author: </b>{article.author?article.author:"Unknown "}</p>
              <p className="publisdate"><b>publication date: </b>{new Date(article.publishedAt).toLocaleString()}</p>
              <Link className="action" to={article.url} target="_blank">
                Find out more
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
  
      </>
    );
  }

  export default Newsitem;
