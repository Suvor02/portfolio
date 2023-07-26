import style from "./projects.module.css"
import Project from "./Project/Project.tsx";

const Projects = () => {
    return (
        <div className={style.projectsDiv}>
            <div className={style.container}>
                <h2>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Social network"} description={"Sushchestvuyut dve osnovnyye traktovki ponyatiya «tekst»: immanentnaya (rasshirennaya, filosofski nagruzhennaya) i reprezentativnaya (boleye chastnaya). Immanentnyy podkhod podrazumevayet otnosheniye k tekstu kak k avtonomnoy real'nosti, natselennost' na vyyavleniye yego vnutrenney struktury."}
                             svg={""}/>
                    <Project title={"Todolist"}
                             description={"Sushchestvuyut dve osnovnyye traktovki ponyatiya «tekst»: immanentnaya (rasshirennaya, filosofski nagruzhennaya) i reprezentativnaya (boleye chastnaya). Immanentnyy podkhod podrazumevayet otnosheniye k tekstu kak k avtonomnoy real'nosti, natselennost' na vyyavleniye yego vnutrenney struktury."}
                             svg={""}/>
                </div>
            </div>

        </div>
    )
}

export default Projects