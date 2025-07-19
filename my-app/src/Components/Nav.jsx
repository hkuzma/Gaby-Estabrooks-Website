import "../css/Nav.css"

function Nav(){

    return (
        <>
            <nav>
                <a href="/" id="GabyEstabrooks">
                    <h1 className="NavHeader" >Gaby Estabrooks</h1>
                </a>
                <div className="navFlex">
                        <a href="/page2" className="link">Intimacy Direction</a>
                        <a href="/page3" className="link">Design</a>
                        <a href="/page4" className="link">Comedy</a>
                        <a href="/page5" className="link">Filmmaking</a>
        
                    <button>Contact Me</button>
                </div>
            </nav>
        </>
    );
}

export default Nav;