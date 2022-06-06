import { useState } from "react";

const AreaInput = ({ suggestions }) => {
    //Initial States
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const onChange = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    

    const SuggestionsListComponent = () => {
        //Return condition
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === activeSuggestionIndex) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : ( null
            // <div className="no-suggestions">
            //     <em>No such location!!</em>
            // </div>
        );
    };

    const onKeyDown = (key) => {
        if (key.keyCode === 13 || key.keyCode === 9) {
            setInput(filteredSuggestions[activeSuggestionIndex])
            setFilteredSuggestions([])
        }
    }

    return (<>
        <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={input}
        />
        {showSuggestions && input && <SuggestionsListComponent />}
        <h1>Test</h1>
    </>);
};
export default AreaInput;