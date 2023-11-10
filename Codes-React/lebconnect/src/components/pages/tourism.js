
import React from 'react';
import SearchBar from '../SearchBar.js';
import BookData from "../../Data.json";


function tourism() {
  return (
      <div style={{position: 'absolute',top: '20px', right: '0'}}>
        <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
      </div>
  );
}

export default tourism;
