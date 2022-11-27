import { News } from "../services/json_dummy";
import { useEffect } from "react";
export function TopicHome() {
    return (
        <div className="container mt-3">
            <label htmlFor="oldest" className="display-block">
                <input type="radio" id="oldest" name="order_by" /> Oldest</label>
            <label htmlFor="newest" className="display-block">
                <input type="radio" id="newest" name="order_by" /> Newest
            </label>
            <button className="btn btn-danger mb-2" onClick={() => document.getElementsByName("order_by").forEach(i => i.checked = false)}>Reset</button>
            <div className="row">
                {News.slice(0, 9).map((data, key) => {
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
    )
}