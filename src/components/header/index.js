import React from "react";

export default function Header() {

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light"
             style={{backgroundColor: "#F2F3F4"}}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars" style={{backgroundColor: "white", fontSize: "20px"}}/>
                    </a>
                </li>

            </ul>
            <ul>

            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown float-right">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-bell"></i>
                        <span className="badge badge-danger navbar-badge">15</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2"></i> 4 new messages
                            <span className="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2"></i> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-file mr-2"></i> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-user-circle" style={{color: "black", fontSize: "27px"}}/>
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
