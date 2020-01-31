import React from 'react';
import "./search.css";

export const Search = ({placeholder, handleChange}) => (
    <input type="search" 
        placeholder={placeholder}  
        onChange={handleChange} />
)
   

