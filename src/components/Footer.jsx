import "./Footer.css"
import logo from "../static/logo_used.png" 

export default function Header(){
    return(
        <div id="main-footer">
            <div id="inner-footer">
                <div id="footer-left">
                    <img id="logo-img" alt="Logo" src={logo} href="/"/>
                </div> 
            </div>
        </div>
    )
}