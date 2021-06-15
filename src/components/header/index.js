import React from "react";

export default function Header() {

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light"
             style={{backgroundColor: "gray"}}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars" style={{backgroundColor: "white", fontSize: "20px"}}/>
                    </a>
                </li>

            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-user-circle" style={{color: "white", fontSize: "27px"}}/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider"/>
                        <div className="dropdown-divider"/>
                        <button className="dropdown-item">
                            Keluar
                        </button>
                    </div>
                </li>

            </ul>
        </nav>
    )
}
