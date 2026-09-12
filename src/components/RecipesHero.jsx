export default function RecipesHero(){
    return <div className="recipes-hero">
        <h1>Recipes</h1>
            <p>Find Something delicious to cook </p>
            <input type="text" placeholder="Search your recipe" />


           <div className="recipes-select">
            <div className="filter">
                <label htmlFor="select-1">Causine</label>

                <select id="select-1"  >
                                    <option value="" hidden ></option>


                    <option value="asian">asian</option>
                    <option value="italian">Italian</option>
                    <option value="american">American</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="mexican">Mexican</option>
                    <option value="pakistani">Pakistani</option>
                    <option value="indian">Indian</option>
                    <option value="japenese">Japenese</option>
                    <option value="moroccan">Moroccan</option>
                    <option value="korean">Korean</option>
                    <option value="greek">Greek</option>
                    <option value="thai">Thai</option>
                    <option value="turkish">Turkish</option>
                    <option value="Smoothie">Smoothie</option>
                    <option value="lebanese">Lebanese</option>
                    <option value="brazilian">Brazilian</option>
                </select>
            </div>
            <div className="diifficulty">
                <label htmlFor="select-2">Difficuilty</label>
                <select id="select-2"  >
                                        <option value="" hidden ></option>

                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="">Hard</option>
                </select>
            </div>
            <div className="time">
                <label htmlFor="select-3">Cooking Time</label>

            <select id="select-3">
                    <option value="" hidden ></option>


                    <option value="15">under !5 minutes</option>
                    <option value="30">under 30 minutes</option>
                    <option value="60">under 60 minutes</option>
            </select>
            </div>

           </div>
    </div>
}