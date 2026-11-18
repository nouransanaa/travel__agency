import Styles from "./Header.module.css";
function Header() {
    return(
        <header className={Styles.header}>
            <h1>Travel agency</h1>
            <nav className={Styles.nav}>
                <a href="#">Accueil</a>
                <a href="#">Destinations</a>
               
                <a href="#">Contact</a>

            </nav>
        </header>
    )
}
export default Header;