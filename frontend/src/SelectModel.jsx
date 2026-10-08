function SelectModel() {
    return(
        <section id="select-model">
            <div className="body">
                <h2>Model Selection</h2>
                <label for="model-selection">Select Model: </label>
                <select name="model-selection">
                    <option value="bsm">Black-Scholes</option>
                    <option value="monte-carlo">Monte-Carlo</option>
                    <option value="bopm">Binomial Option Pricing</option>
                </select>
                <p>
                    Here, I will write a function that collects data from 
                    Python backend to display the plots and values. I may 
                    also add adjustable parameter scrolls to make it easy 
                    for the user.
                </p>
            </div>
        </section>
    );
}

export default SelectModel