import './JobCard.scss';
import TagButton from '../TagButton/TagButton';

const JobCard = ({job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
},
    handleTagClick,
    
}) => {
    const tags = [role, level];
    
    if (tools) {
        tags.push(...tools);
    }

    if(languages) {
        tags.push(...languages);
    }

    return (
        <div className={`${featured ? 'featured-card' : ''} job-card`}>
       
        <div className="job-description">
            <div className="company-logo">
                <img src={logo} alt="logo"/>
            </div>
        
            <div className="job-preview">
                <div>
                    <h5 className="company-name">{company}</h5>
                    {isNew && (<span className="chips is-new">NEW!</span>)}
                    {featured && (<span className="chips is-featured">FEATURED</span>)}
                </div>

                <div className="position">
                    {position}
                </div>
                <div className="additional-info">
                    <span>{postedAt}</span>
                    <span className="dot">&#183;</span>
                    <span>{contract}</span>
                    <span className="dot">&#183;</span>
                    <span>{location}</span>
                </div>
            </div>
            

        </div>
        <div className="tags-container">
           
            {
                tags.map((tag, id) => {
                    return (
                        <TagButton handleTagClick={handleTagClick} tag={tag} key={id}>{tag}</TagButton>
                    )
                })
            }
        
        </div>

        </div>
    )
};

export default JobCard;