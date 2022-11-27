import { useState } from "react";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";
import { News } from '../services/json_dummy';
import "react-datepicker/dist/react-datepicker.css";

export function AuthorHasWriteNews() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="userdashboard-main">
                <form className="form-group">
                    <div className="row" style={{ marginTop: "15px", paddingLeft: "150px" }}>
                        <div className="col-sm-6 mt-3 mb-2">
                            <label htmlFor="date" className="col-form-label">Filter By Date</label>
                            <div className="">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                <div>
                                    <label style={{ display: "block" }} htmlFor="created-at"><input type={"radio"} id="created-at" /> Created At</label>
                                    <label style={{ display: "block" }} htmlFor="updated-at"><input type={"radio"} id="updated-at" /> Updated At</label>
                                    <button className="btn btn-danger">Reset Filter Date</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3" >
                            <label>Filter By Keyword</label>
                        </div>
                    </div>
                </form>
                <div style={{ height: "2px", background: "black", marginTop: "1%" }}> </div>
                <div className="container">
                    <NavLink to="#" className="btn btn-danger mt-2 mb-1" style={{ marginLeft: "10px" }}>Test</NavLink>
                    <div className="row" style={{ marginLeft: "100px", width: "75%", paddingLeft: "100px", overflowY: "scroll", height: "75vh" }}>
                        {
                            News.map((data, key) => {
                                return (
                                    <div className="col-sm-6">
                                        <div style={{
                                            backgroundImage: `url(${data.url_gambar})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            maxWidth: "125px",
                                            height: "75px"
                                        }}> </div>
                                        <div className="test-parent" style={{ padding: "0" }}>
                                            <p className="test">Added at: 3/6/2020</p>
                                            <p className="test">Updated at</p>
                                            <p className="test">{data.title_news}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}