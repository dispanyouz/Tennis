import backgroundCourtTennis from "../../images/backgroundCourtTennis.png";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import s from "./NewsPage.module.scss";

function NewsPage(props) {
    return (
        <div>
            <Header />
            <Banner text="Новости" image={backgroundCourtTennis} />
        </div>
    );
}

export default NewsPage;