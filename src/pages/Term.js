import React from "react";
import './Term.css';

function Term() {

    return (
        <div>
            <header className="headline">
                <div className="container">
                    <h1>Term</h1>
                </div>
            </header>

            <main className="headline container">

                <div className="column1">
                    <p className="text-col1">
                        Monthly typing down things that revolve around my co-op terms, University-related changes, and future ideas. 
                    </p>
                </div>

                <div className="column2">
                    <div className="line-col2">
                        <a className="headline-col2" href="/Term/makerspace">
                            <span>Redefining the Makerspace</span>
                        </a>
                        <small class="date">August 2022</small>
                    </div>

                    <div className="line-col2">
                        <a className="headline-col2" href="/Term/makerspace">
                            <span>Sample documentation</span>
                        </a>
                        <small class="date">August 2022</small>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Term;