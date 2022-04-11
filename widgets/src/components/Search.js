import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("React");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php?`, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    /*on initial load search*/
    if (term && !results.length) {
      search();
    } else {
      /*setting a timeout and resetting the timer everytime the user types, as to not spam the wikipedia API with constant search(get) request*/
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      /*a cleanup function will run each time the component is re-rendered, before the rest of the useffect function*/
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);
  /*use a map function to make html from all the results as well as adding a button to go to the result URL*/
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
