import './FilterCard.scss';

const FilterCard = ({filters, handleFilterClick, handleClearClick}) => {
    
    return (
        <div className="job-card filtered-card">
                <div className="filtered-tags-container">
                    {
                        filters.map((filter, id) =>  (
                        <button className="filter-button" onClick={() => handleFilterClick(filter)} key={id}>
                            <span className="filter-tag">{filter} </span>
                            <span className="clear-icon">✖</span>
                        </button>))
                    }
                </div>     
            <div className="clear-btn" onClick={() => handleClearClick(filters)}>Clear</div>
        </div>
        
    )
}

export default FilterCard;