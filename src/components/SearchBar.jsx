import React, { useEffect, useState } from 'react';
import search from '../assets/search.svg';
import command from '../assets/command.svg';
import close from '../assets/close.svg';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    // Load search history from local storage on component mount
    useEffect(() => {
        const storedHistory = localStorage.getItem('History');
        if (storedHistory) {
            setSearchHistory(JSON.parse(storedHistory));
        }
    }, []);

    // Update local storage whenever searchHistory changes
    useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    const handleSearch = () => {
        if (value) {
            // Add the new search value to the history
            setSearchHistory([value, ...searchHistory]);
        }
    };

    const onInput = (e) => setValue(e.target.value);
    const onClear = () => setValue('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="searchbar">
            <form className="relative" method="get">
                <input
                    type="text"
                    value={value}
                    onChange={onInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="type something ..."
                    className={`${isFocused || value ? 'w-[550px] transition-width duration-400' : 'w-52 transition-width duration-500'
                    } 
                     p-3 pr-16 pl-8 text-sm bg-zinc-100 bg-opacity-25 rounded-md border border-fuchsia-600`}
                />
                {value && (
                    <div className="close cursor-pointer absolute top-3 right-12" onClick={onClear}>
                        <img src={close} alt="" className="h-5 w-5" />
                    </div>
                )}
                <div className="search absolute top-3 left-2">
                    <img src={search} alt="" className="h-5 w-5" />
                </div>
                <button
                    type="submit"
                    onClick={handleSearch}
                    className="command absolute top-2 right-3 border p-1 rounded border-fuchsia-700"
                >
                    <img src={command} alt="" className="h-5 w-5" />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
