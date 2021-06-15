import React from "react";
import Image1 from "../../assets/image/codemi.png"
import { CgList} from 'react-icons/cg';
import {BiCommentDetail} from 'react-icons/bi'
import {GiUpgrade} from 'react-icons/gi'

export default function DashboardCodemi() {
    return(
        <aside className="main-sidebar sidebar-light-gray-dark elevation-4" style={{backgroundColor:"#F2F3F4", textAlign:'left', marginLeft:'5px'}}>
            <a href="index3.html" className="brand-link" style={{padding:"10px"}}>
                <img
                    src={Image1}
                    alt="codemi"
                    style={{ height:'100px', width:'100px'}}
                />
                <span className="brand-text font-weight" style={{color:"black", fontFamily:"roboto"}}>Codemi</span>
            </a>


            <div className="sidebar" style={{marginTop:"20px"}}>
                <div className="user-panel">
                    <div className="info">
                        <a href="#" className="d-block" style={{ color:'green', fontSize:'20px', fontWeight:'bold'}}>HOME</a>
                    </div>
                </div>

                <div className="user-panel">
                    <div className="info" style={{textAlign:'left'}}>
                        <a href="#" className="d-block" style={{fontSize:'20px', fontWeight:'bold', marginTop:'5px'}}>LEARNING</a>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item" style={{backgroundColor:'#F2F3F4'}}>
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-gem"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>
                                      Courses
                                        <span className="right badge badge-danger float-right" >21</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview" style={{marginTop:'10px', marginBottom:'20px'}}>
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-calendar"></i>
                                <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Learning Plans</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="user-panel">
                    <div className="info" style={{textAlign:'left'}}>
                        <a href="#" className="d-block" style={{fontSize:'20px', fontWeight:'bold', marginTop:'5px'}}>MANAGE</a>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item" style={{backgroundColor:'#F2F3F4'}}>
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-user"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>
                                        Users
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview" style={{marginTop:'10px', marginBottom:'10px'}}>
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-user-cog"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Skilss</p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview" >
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-chart-area"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Reports</p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview" >
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-chart-line"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Analytics</p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview" >
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4',marginBottom:'20px'}}>
                                    <i className="nav-icon fas fa-bullhorn"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Announcements</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="user-panel">
                    <div className="info" style={{textAlign:'left'}}>
                        <a href="#" className="d-block" style={{fontSize:'20px', fontWeight:'bold', marginTop:'5px'}}>CONFIGURE</a>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item" style={{backgroundColor:'#F2F3F4'}}>
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-star-half-alt"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>
                                        Points
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview" style={{marginTop:'10px', marginBottom:'10px'}}>
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-user-cog"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Reward</p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview" >
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-envelope"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Email templates</p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview" >
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4'}}>
                                    <i className="nav-icon fas fa-info-circle"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Company info</p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview" >
                                <a href="widgets.html" className="nav-link" style={{backgroundColor:'#F2F3F4',marginBottom:'20px'}}>
                                    <i className="nav-icon fas fa-user"></i>
                                    <p style={{color:"black", fontSize:"18px",fontFamily:"roboto"}}>Billing</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </aside>
    )
}
