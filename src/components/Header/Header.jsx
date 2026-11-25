import Styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <header className={Styles.header}>
            <h1>Travel agency</h1>
            <nav className={Styles.nav}>
                <NavLink to="/"  className={({isActive})=>isActive?Styles.active:""}>Accueil</NavLink>
                <NavLink to="/destinations" className={({isActive})=>isActive?Styles.active:""}>Destinations</NavLink>
                <NavLink to="/reservation" className={({isActive})=>isActive?Styles.active:""}>Reservation</NavLink>
                <NavLink to="/apropos" className={({isActive})=>isActive?Styles.active:""}>À propos</NavLink>
            </nav>
        </header>
    )
}
export default Header;