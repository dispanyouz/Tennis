import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Slider from "../../components/Slider";
import backgroundBlueTennis from "../../images/backgroundTennis.png";

import s from "./AboutPage.module.scss";

function AboutPage() {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <Header />
                <Banner text="О клубе" image={backgroundBlueTennis} />
            </div>
            <div className={s.swiper}><Slider /></div>
            <div className={s.footer}></div>
        </div>
    );
}

export default AboutPage;