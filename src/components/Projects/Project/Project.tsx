import {FC} from "react";
import style from "./project.module.css"

type ProjectTypeProps = {
    title: string
    description: string
    svg:string
}
const Project:FC<ProjectTypeProps> = ({title,description,svg}) => {
    return (
        <div className={style.projectDiv}>
            <div className={style.containerImg}>
                <img src={svg}/>
            </div>

            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>{description}</span>
            <button className={style.button}>Preview</button>
        </div>
    )
}

export default Project