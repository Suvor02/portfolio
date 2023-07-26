import style from "./header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.link_button}>
                <a href="">Home</a>
            </div>
            <div className={style.link_button}>
                <a href="">Skills</a>
            </div>
            <div className={style.link_button}>
                <a href="">Projects</a>
            </div>
            <div className={style.link_button}>
                <a href="">Contacts</a>
            </div>
        </div>
    )
}

export default Header