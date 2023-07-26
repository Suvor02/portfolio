// import reacttt from "../../../assets.react.svg"
import Skill from "./Skill/Skill.tsx";
import style from "./skills.module.css"

const Skills = () => {
    // const Skill1 = {title:"",descrizione:"",svg:react}

    return (
        <div className={style.skillsDiv}>
            <div className={style.container}>
                <h2> Skills </h2>
                <div className={style.skills}>
                    <Skill title={"React"}
                           descrizione={"consectetur adipisicing elit. Aspernatur cumque dicta et exercitationem facilis incidunt magnam molestias porroratione repellat, tempore ut. Asperiores deleniti ducimus eos, excepturi fugiat fugit incidunt magni minusmodi molestias nisi non numquam pariatur, quaerat ratione reprehenderit similique, suscipit ullam."}
                           svg={""}/>
                    <Skill title={"Ts"}
                           descrizione={"consectetur adipisicing elit. Aspernatur cumque dicta et exercitationem facilis incidunt magnam molestias porroratione repellat, tempore ut. Asperiores deleniti ducimus eos, excepturi fugiat fugit incidunt magni minusmodi molestias nisi non numquam pariatur, quaerat ratione reprehenderit similique, suscipit ullam."}
                           svg={""}/>
                    <Skill title={"Js"}
                           descrizione={"consectetur adipisicing elit. Aspernatur cumque dicta et exercitationem facilis incidunt magnam molestias porroratione repellat, tempore ut. Asperiores deleniti ducimus eos, excepturi fugiat fugit incidunt magni minusmodi molestias nisi non numquam pariatur, quaerat ratione reprehenderit similique, suscipit ullam."}
                           svg={""}/>
                </div>
            </div>

        </div>
    )
}

export default Skills