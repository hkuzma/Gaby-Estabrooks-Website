import "../css/Nav.css"

function Nav(){

    return (
        <>
            <nav>
                <a href="/">
                    <h1 className="NavHeader" >Gaby Estabrooks</h1>
                </a>
                <div className="links">
                    <a href="/page2" className="link">Intimacy Direction</a>
                    <a href="/page3" className="link">Design</a>
                    <a href="/page4" className="link">Comedy</a>
                    <a href="/page5" className="link">Filmmaking</a>
                </div>
      
                <button>Contact Me</button>
            </nav>
        </>
    );
}

export default Nav;