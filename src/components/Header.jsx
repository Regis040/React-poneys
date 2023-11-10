import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <h2><img class="logo" src="./imgs/logo.jpg" alt="le logo"/></h2>
            <nav>
                <ul>
                    <li><Link to ="/">Accueil</Link></li>
                    <li><Link to ="/listtouslesponeys">Les Poneys</Link></li>                    
                    <li><Link to ="/contact">Contact</Link></li>
                    <li><Link to ="/aboutme">About me</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;

