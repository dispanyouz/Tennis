import s from "./Banner.module.scss";

function Banner(props) {
    return (
        <div className={s.container}>
            <div className={s.text}>{props.text}</div>
            <div className={s.background_font}><img src={props.image} alt="Error" /></div>
        </div>
    )
}

export default Banner;