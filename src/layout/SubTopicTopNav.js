import { Link } from "react-router-dom";

export function SubTopicTopNav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark remove">
                <ul className="top-nav-subtopic-links">
                    <li className="top-nav-home nav-link"><Link to="#" className="active">Home</Link></li>
                    <li className="navbar-nav-subtopic">
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Hello World Lorem Ipsum</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div><div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>

                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div><div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                        <div className="nav-item-subtopic">
                            <Link to="#">Test</Link>
                        </div>
                    </li>

                </ul>
            </nav>
        </>
    )
}