import './App.css'
import Header from "./components/Header/Header.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Home from "./components/Home/Home.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Remotejob from "./components/Remotejob/Remotejob.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {


    return (
        <div className="App">
            <div className="divApp">
                <Header/>
                <hr/>
                <Home/>
                <hr/>
                <Skills/>
                <hr/>
                <Projects/>
                <hr/>
                <Remotejob/>
                <hr/>
                <Contacts/>
                <hr/>
                <Footer/>
            </div>

        </div>

    )
}

export default App
