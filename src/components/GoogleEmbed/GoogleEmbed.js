import './GoogleEmbed.css';
import React, { useState, useEffect } from 'react';


const search = "backpain";
const apiKey = "AIzaSyDzYuto0bu8yOYwR-_hA183No0qRdWXMJk";
const cx = "d60e96f3766eb4391";
const site = "https://www.reddit.com/";
const site2 = "https://scholar.google.com/";
const site3 = "https://www.wolterskluwer.com/en/solutions/uptodate";
const site4 = "https://www.cdc.gov/";
const site5 = "https://pubmed.ncbi.nlm.nih.gov/";
const site6 = "https://www.who.int/en/";
const site7 = "https://www.mayoclinic.org/";
const site8 = "https://www.nih.gov/";
const site9 = "https://www.medscape.com/ ";



function GoogleFetcher() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
      fetch(`https://www.googleapis.com/customsearch/v1?q=${search}&key=${apiKey}&cx=${cx}&siteSearch=${site}&siteSearch=${site2}&siteSearch=${site3}&siteSearch=${site4}&siteSearch=${site5}&siteSearch=${site6}&siteSearch=${site7}&siteSearch=${site8}&siteSearch=${site9}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.items);
        });
    }, []);
  
    return (
      <>
      <div class="search-results-header">
      <div>Search Results</div>
      <div id="search-results">
        {searchResults.map((result, index) => (
          <a key={index} style={{textDecoration:'none'}}href={result.link}>{result.title}</a>
        ))}
      </div>
      </div>
      </>
    );
  }
  
  export default GoogleFetcher;