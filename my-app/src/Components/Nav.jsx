import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../css/Nav.css"

function Nav(){

   

    return (
        <>
            <nav>
                <a href="/" id="GabyEstabrooks">
                    <h1 className="NavHeader" >Gaby Estabrooks</h1>
                </a>
                <div className="navFlex">
                    <a href="/page2" className="link" id="link2">Intimacy Direction</a>
                    <a href="/page3" className="link" id="link3">Design</a>
                    <a href="/page4" className="link" id="link4">Comedy</a>
                    <a href="/page5" className="link" id="link5">Filmmaking</a>
        
                    <a href="/Contact" className="button">CONTACT</a>
                </div>
            </nav>
        </>
    );
}

export default Nav;