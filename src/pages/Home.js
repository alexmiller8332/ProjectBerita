import React from 'react'
import { News } from '../services/json_dummy';

export default function Home() {
    return (
        <div className="container mt-3">
            <div className="row">
                <h5>Topic 1</h5>
                {News.slice(0, 3).map((data, key) => {
                    const limit_words = data.content_news.substring(3, 100)
                    return (
                        <div key={key} className="col-sm-4">
                            <div className="card mb-3">
                                <div style={{
                                    backgroundImage: `url(${data.url_gambar})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    padding: "10px",
                                    backgroundPosition: "center",
                                    maxWidth: "100%",
                                    height: "150px"
                                }}> </div>
                                <div>
                                    <h4 className='card-title'>{data.title_news}</h4>
                                    <div className="card-text" dangerouslySetInnerHTML={{ __html: limit_words }}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-center">
                <button className="btn btn-success mb-2"> Load More </button>
            </div>
        </div>
    );
}