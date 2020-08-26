import React, {useState} from 'react';

const Search = ({ searchUsers, users, clearUsers, setAlert }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert("Please Enter Someting Value", 'light');
        }else {
            searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="search__form">
            <input type="text" name="text" className="search__input" placeholder="Search Users..." onChange={onChange} value={text} />
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
            {users.length > 0 && <button className="btn btn-light btn-block" onClick={() => clearUsers()}>Clear</button>}
        </form>
    );
};

export default Search;