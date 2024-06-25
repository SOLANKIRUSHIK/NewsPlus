import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // Add PropTypes for prop validation
import Typewriter from './Typewriter';
import Newsitem from './Newsitem';
import Spnner from './Spnner'; 

const News = (props) => {
    const hometext = ["WELCOME TO NEWSPULSE", "DEVELOPED BY RUSHIK"];
    const [newsData, setNewsData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const location = useLocation();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                props.progress(30);
                setLoader(true);
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.selectedCountry}&category=${props.category}&apiKey=f8cc8ad5d4af4462857e2fbf026f3c4a&page=${page}&pageSize=12`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                props.progress(60);
                const parsedData = await response.json();
                setNewsData(parsedData.articles || []);
                setTotalResults(parsedData.totalResults);
                document.title = ("NewsPlus-") + props.category;
                setLoader(false);
                props.progress(100); 
            } catch (error) {
                console.error("Error fetching the news data:", error);
                setLoader(false);
            }
        };

        fetchNews();
    }, [page, location, props.category , props.selectedCountry, props.progress]);

    useEffect(() => {
        setPage(1);
    }, [props.category]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            <Typewriter textArray={hometext} />
            {loader ? <Spnner /> : (
                <div className="parent">
                    {newsData.map((article, index) => (
                        <Newsitem key={index} article={article} />
                    ))}
                </div>
            )}
            <div className="btncontainer">
                <button className="previousbtn" disabled={page <= 1} onClick={() => setPage((prevPage) => prevPage - 1)}>&laquo; Previous</button>
                <button className="nextbtn" disabled={newsData.length === 0 || (page * 12) >= totalResults} onClick={() => setPage((prevPage) => prevPage + 1)}>Next &raquo;</button>
            </div>
        </>
    );
};

News.propTypes = {
    category: PropTypes.string.isRequired,
};

export default News;
