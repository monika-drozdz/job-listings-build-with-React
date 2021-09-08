import React, { useState, useEffect } from 'react';

import './App.scss';

import JobCard from './components/JobCard/JobCard';
import FilterCard from './components/FilterCard/FilterCard';

import data from './data/data.json';

function App () {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
      setJobs(data); 
    }, []
  );

const filterFunc = ({role, level, tools, languages}) => {
  
  if (filters.length === 0) {
    return true;
  };
  
  const tags = [role, level];
    
    if (tools) {
        tags.push(...tools);
    }

    if(languages) {
        tags.push(...languages);
    }

  return tags.some((tag) => filters.includes(tag));
};

const handleTagClick = (tag) => {
  if (filters.includes(tag)) return;
  setFilters([...filters, tag]);
}

const handleFilterClick = (passedFilter) => {
  setFilters(filters.filter((f) => f !== passedFilter));
}

const handleClearClick = () => {
  setFilters([]);
}

const filteredJobs = jobs.filter(filterFunc);

    return (
      <div className="App">
        <header className="App-header">
        </header>
         
         <div className="preview">
            {
                filters.length > 0 && (
                <div className="filter-card"> 
                  <FilterCard handleFilterClick={handleFilterClick} handleClearClick={handleClearClick} filters={filters}/>
                </div>)
            }
          
            {
              filteredJobs.map((job) => (
                <JobCard 
                  handleTagClick={handleTagClick}
                  job={job} 
                  key={job.id}/>
                )
              )
            }
         
          </div>
          <footer>
            <p>
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
              Coded by <a href="https://github.com/monika-drozdz" target="_blank" rel="noreferrer">Monika Dróżdż</a>.
            </p>
          </footer>
      </div>
    );
}

export default App;


