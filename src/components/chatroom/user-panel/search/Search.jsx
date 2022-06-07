import { useState } from 'react';

import './search.scss';
import {AiOutlineSearch, AiOutlineArrowLeft} from 'react-icons/ai';

const Search = () => {

    const [inputFocus,setInputFocus] = useState(false);

    const OnInputFocusHandler = () => {
        setInputFocus(true);
    }
    const onInputBlurHandler = () => {
        setInputFocus(false)
    }

    return (
        <div className='search-container'>
            <button>{inputFocus ? <AiOutlineArrowLeft className='green-left'/> : <AiOutlineSearch/>}</button>
            <input placeholder='Search or start new chat' onFocus={OnInputFocusHandler} onBlur={onInputBlurHandler}/>
        </div>
    )
}

export default Search;