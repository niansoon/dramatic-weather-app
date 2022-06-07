import { useState } from "react";

const AreaInput = ({ suggestions }) => {
    //Define Initial States
    const [input, setInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestions, setActiveSuggestions] = useState(0);

    //When user types
    const onChange = (e) => {
        const userInput = e.target.value;

        //Filter suggestions that do not contain the user's input
        const filter = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setInput(e.target.value);
        setShowSuggestions(true);
        setFilteredSuggestions(filter);
        setActiveSuggestions(0);
    };

    //When user clicks on suggestions, text goes to input box
    const onClick = (e) => {
        setInput(e.target.innerText);
        setShowSuggestions(false);
        setFilteredSuggestions([]);
        setActiveSuggestions(0);
    };

    

    const SuggestionsListComponent = () => {
        //Condition
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === activeSuggestions) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (null);
    };
            // <div className="no-suggestions">
            //     <em>No such location!!</em>
            // </div>

    // const onKeyDown = (key) => {
    //     if (key.keyCode === 13 || key.keyCode === 9) {
    //         setInput(filteredSuggestions[activeSuggestions])
    //         setFilteredSuggestions([])
    //     }
    // }

    return (
        <>
        <input
            type="text"
            onChange={onChange}
            // onKeyDown={onKeyDown}
            value={input}
        />
        {showSuggestions && input && <SuggestionsListComponent />}
        </>
    );
};
export default AreaInput;