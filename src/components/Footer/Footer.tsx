import style from "./footer.module.css"
const Footer = () => {
    return (
        <div className={style.footerDiv}>
            <div className={style.container}>
                <h2>Deykun Alexander</h2>
                <div className={style.footerInfo}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>@ 2023 No rights for this</div>
            </div>
        </div>
    )
}

export default Footer