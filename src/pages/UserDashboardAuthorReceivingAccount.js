import { Link } from "react-router-dom";
import { useEffect } from "react";
export function UserDashboardCreateAuthorReceivingAccount() {
    return (
        <div className="userdashboard-main">
            <div className="container-fluid">
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="text-center btn-cust btn-red margin-auto">
                        <Link to={"#"} className="text-center nav-link">Create Account Balance</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export function UserDashboardAuthorReceivingAccount() {
    let activeteButtonClicked = (event) => {
        event.preventDefault();
        let activebutton = document.querySelectorAll(".button-actived");
        activebutton.forEach(element => { element.style.display = "block" });
    }

    let removeActiveButton = (event) => {
        event.preventDefault();
        document.querySelectorAll(".button-actived").forEach(element => { element.style.display = "none" });
    }
    useEffect(() => {
        document.querySelectorAll(".button-actived").forEach(element => {
            element.style.display = "none";
        })
    })
    return (
        <div className="userdashboard-main">
            <div className="container-fluid">
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
                <form className="form-group w-75" style={{ position: "relative", left: "100px", top: "100px" }}>
                    <div className="mb-3 mt-3 row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled defaultValue="Joshua" id="username" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" disabled="Joshua" id="email" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor='username' className="col-sm-2 col-form-label">Account Bank Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="0000000" id="username" />
                        </div>
                    </div>
                    <div className="margin-auto d-lg-flex justify-content-between mt-3">
                        <button className="btn btn-primary" onClick={activeteButtonClicked}>Activate Update</button>
                        <button className="btn btn-success button-actived">Update</button>
                        <button className="btn btn-secondary button-actived" onClick={removeActiveButton}>Cancel</button>
                        <button className="btn btn-danger button-actived">Delete Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

