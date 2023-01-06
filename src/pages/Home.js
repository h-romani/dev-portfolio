import './Home.css';
import { FaLinkedin } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import resume from "./resume/Hasen_Resume_SE_2023.pdf";

function Home() {
    return (

        <div className="Home">

            <div className='intro1'>
                <h1>Hi, I am Hasen.</h1>
                <h2>I design, build, and test software.</h2>
                <a download href={resume}>
                    <h3>resumé</h3>
                </a>
            </div>

            <div className='social'>
                    
                {/* <FaLinkedin size={"3.1em"}/> 
                <BsGithub size={"3.1em"} />
                <VscMail size={"3.1em"} /> */}
            </div>

        </div>
    );
}

export default Home;