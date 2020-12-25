import React, {useState} from 'react'

const SearchBar = ({onSubmit}) => {
    const [keyword, setKeyword] = useState('');

    const onEnterSubmit = (event) => {
        event.preventDefault();
        onSubmit(keyword);
    }

    const onUpdate = (event) => {
        setKeyword(event.target.value);
    }

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onEnterSubmit}>
                <div className="field">
                    <label>APUN KA YOUTUBE</label>
                    <input type="text" onChange={onUpdate} value={keyword}/>
                </div>             
            </form>
        </div>
    );

}

export default SearchBar;