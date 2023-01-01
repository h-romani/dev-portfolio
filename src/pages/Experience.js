import React from "react";
import './Experience.css'

function Experience() {

    return (
        <div>
            <header className="headline">
                <div className="container">
                    <h1>Experience</h1>
                </div>
            </header>

            <section className="container">

                <div className="exp-column1">
                    <h2>Software Developer Co-op</h2>
                    <h3>Tulip Retail</h3>
                    <ul>
                        <li>
                            This journey has just begun...
                        </li>
                    </ul>
                </div>

                <div className="exp-column2">
                    <span>September 2022 - Present</span>
                </div>


                <div className="exp-column1">
                    <h2>Makerspace Manager</h2>
                    <h3>Society of Computing and Information Science</h3>
                    <ul>
                        <li>
                            Designed the SOCIS Makerspace website prototypes/interfaces using Figma and Adobe XD.
                        </li>

                        <li>
                            Oversee the maintenance of inventory equipment, facilitate student access through Makerspace's online records, and troubleshoot malfunctioning hardware.
                        </li>
                    </ul>
                </div>

                <div className="exp-column2">
                    <span>September 2021 - Present</span>
                </div>


            </section>
        </div>

    )
}

export default Experience;