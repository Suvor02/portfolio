import style from "./remotejob.module.css"

const Remotejob = () => {
    return (
        <div className={style.remotejobDiv}>
            <div className={style.container}>
                <h2>Im down to work remotely</h2>
                <button className={style.button}> hire me</button>
            </div>
        </div>
    )
}

export default Remotejob