import './Home.css';
import { FaLinkedin } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

function Home() {
    return (

        <div className="Home">

            <div className='intro1'>
                <h1>Hi, I am Hasen.</h1>
                <h2>I design, build, and test software.</h2>
            </div>

            <div className='social'>
                <FaLinkedin size={"3.1em"} />
                <BsGithub size={"3.1em"} />
                <VscMail size={"3.1em"} />
            </div>

        </div>
    );
}

export default Home;