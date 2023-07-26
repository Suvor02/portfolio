import style from "./home.module.css"

const Home = () => {
    return (
        <div className={style.homeDiv}>
            <div className={style.container}>
                <div className={style.divText}>
                    <h2>Deykun Alexander</h2>
                    <h2>Front-end Developer</h2>
                </div>
                <div className={style.divPhoto}>

                </div>
            </div>
        </div>
    )
}

export default Home