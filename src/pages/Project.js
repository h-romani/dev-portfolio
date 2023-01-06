import React from "react";
import './Projects.css';
import './term/Term.css';
import img0 from '../images/cine01.png';

function Project() {

    return (
        <div>

            <header className="headline">
                <div className="container">
                    <h1>Projects</h1>
                </div>
            </header>

            <main className="headline container">
                <div className="project-column">
                    <a className="pro-img" target="_blank" rel="noopener noreferrer" href="https://cinephilia-review.web.app/"><img src={img0} width="1150" height="700" alt="cinephilia"></img></a>
                        <h4>
                            <a href ="https://cinephilia-review.web.app/" target="_blank" rel="noopener noreferrer">Cinephila</a>
                        </h4>
                </div>
            </main>

        </div>
    )
}

export default Project;