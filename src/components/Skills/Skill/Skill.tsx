import {FC} from "react";
import style from "./skill.module.css"
type SkillTypeProps = {
    title: string
    descrizione: string
    svg: string
}

const Skill: FC<SkillTypeProps> = ({title, descrizione, svg}) => {
    return (
        <div className={style.skill}>
            <div className={style.plug}>
                <img src={svg} alt=""/>
            </div>
            <h3>{title}</h3>
            <div>
                <p>
                    {descrizione}
                </p>
            </div>
        </div>
    )
}

export default Skill