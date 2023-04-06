import React, { useState } from "react";
import './index.css';
import { SetUserInputType } from "../../types/types";

const SearchBar = (props: SetUserInputType) => {
    return (
        <div className="search-bar-container">
            <input type="text" name="search-bar" id="search-bar" placeholder="Unesite naziv grada..." 
            value={props.userInput} onChange={(e) => props.setUserInput(e.target.value)}/>
            {/* <button>Search</button> */}
        </div>
    );
};

export default SearchBar;