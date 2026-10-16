function Overview() {
    return(
        <section id="overview">
            <div className="body">
                <h2>Overview</h2>
                <p>
                    The purpose of this site is grant an introduction to some
                    elementary options pricing models. Specifically, the Black-
                    Scholes-Merton (BSM) model, Monte Carlo simulation, and the 
                    binomial options pricing model.
                </p>
                <div className="overview-sections">
                    <h3>Sections:</h3>
                    <ol>
                        <li><strong>Overview</strong>
                            <ul>
                                <li>Overview of the page</li>
                            </ul>
                        </li>
                        <li><strong>Model Selection:</strong> 
                            <ul>
                                <li>Here you may see a visual representation of each method</li>
                            </ul>
                        </li>
                        <li><strong>Learn</strong>:
                            <ul>
                                <li>Black-Scholes-Merton (BSM) Model</li>
                                <li>Monte Carlo Simulation</li>
                                <li>Binomial Option Pricing Model</li>
                            </ul>
                        </li>
                        <li><strong>Contact</strong>
                            <ul>
                                <li>Feel free to shoot me a message!</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Overview