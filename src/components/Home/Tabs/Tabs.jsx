import Performance from "../Performance/Performance";

const Tabs = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Overview" />
                <div role="tabpanel" className="tab-content p-10 w-full"><Performance></Performance></div>

                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className="tab"
                    aria-label="Fundamentals"
                    defaultChecked />
                <div role="tabpanel" className="tab-content p-10">Fundamentals</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="News Insights" />
                <div role="tabpanel" className="tab-content p-10">News Insights</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Sentiments" />
                <div role="tabpanel" className="tab-content p-10">Sentiments</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Team" />
                <div role="tabpanel" className="tab-content p-10">Team</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Technicals" />
                <div role="tabpanel" className="tab-content p-10">Technicals</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tokenomics" />
                <div role="tabpanel" className="tab-content p-10">Tokenomics</div>
            </div>
        </div>
    );
};

export default Tabs;