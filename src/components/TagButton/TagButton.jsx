import './TagButton.scss';

const TagButton = ({tag, handleTagClick}) => {
    return (
        <button onClick={()=> handleTagClick(tag)} className="tag">{tag}</button>
    )
};

export default TagButton;