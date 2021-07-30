import React from "react";
import { Link, useLocation } from 'react-router-dom';
function Header() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <div>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">
                    <h1 class="logo mr-auto"><Link to="/">Mentor</Link></h1>
                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            {
                                localStorage.getItem("user-token") ?
                                    <>
                                        <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/">Home</Link></li>
                                        <li className={splitLocation[1] === "about" ? "active" : ""}><Link to="/about">About</Link></li>
                                        <li className={splitLocation[1] === "courses" ? "active" : ""}><Link to="/courses">Courses</Link></li>
                                        <li className={splitLocation[1] === "trainers" ? "active" : ""}><Link to="/trainers">Trainers</Link></li>
                                        <li className={splitLocation[1] === "event" ? "active" : ""}><Link to="/event">Events</Link></li>
                                        <li className={splitLocation[1] === "pricing" ? "active" : ""}><Link to="/pricing">Pricing</Link></li>
                                        <li className={splitLocation[1] === "contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                                    </>
                                    :
                                    <>
                                        <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/">Home</Link></li>
                                        <li className={splitLocation[1] === "about" ? "active" : ""}><Link to="/about">About</Link></li>
                                        <li className={splitLocation[1] === "courses" ? "active" : ""}><Link to="/courses">Courses</Link></li>
                                        <li className={splitLocation[1] === "trainers" ? "active" : ""}><Link to="/trainers">Trainers</Link></li>
                                        <li className={splitLocation[1] === "event" ? "active" : ""}><Link to="/event">Events</Link></li>
                                        <li className={splitLocation[1] === "pricing" ? "active" : ""}><Link to="/pricing">Pricing</Link></li>
                                        <li className={splitLocation[1] === "contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                                    </>
                            }
                        </ul>
                    </nav>
                    {
                        localStorage.getItem("user-token") ?
                            <>
                            </>
                            :
                            <>
                                <Link to="/register" className="get-started-btn">Get Started</Link>
                            </>
                    }

                </div>
            </header>
        </div>
    );
}

export default Header;
