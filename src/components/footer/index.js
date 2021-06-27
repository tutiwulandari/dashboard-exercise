import React from "react";

export default function Footer() {
    return (
        <footer className="main-footer" style={{backgroundColor:"#292961", margin:"0px auto", bottom:'0px', position:'absolute'}}>
            <strong style={{color:"white"}}>
                Copyright © 2021 <a href="#" style={{color:"white"}} >Dasboard</a>
            </strong>

            <div className="float-right d-none d-sm-inline-block" style={{color:"white"}}>
                <b>Codemi</b>
            </div>
        </footer>
    );
}
