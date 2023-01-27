import { Link } from "react-router-dom";
import logo from "../../images/logo.png";


import s from "./Header.module.scss";

function Header(props) {
    return (
        <>
            <div className={s.header}>
                <div className={s.container}>
                    <nav className={s.navPanel}>
                        <img src={logo} alt="Error" />
                        <Link to="/">Главная</Link>
                        <Link to="/about">О клубе</Link>
                        <Link to="/news">Новости</Link>
                        <div className={s.socials}>
                            <span className="icon-youtube"></span>
                            <span className={`icon-VK ${s.iconVK}`}></span>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    );
}

export default Header;