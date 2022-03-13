import { ReactComponent as Gitgato } from "assets/img/githubimg.svg";
import "./styles.css";
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/8Jeandvlp8">
                        <div className="dsmovie-contact-container">
                            <Gitgato  />
                              <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>

        </header>
    );

}
export default Navbar;