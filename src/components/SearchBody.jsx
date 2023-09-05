import React, { useEffect, useState } from 'react'
import clock from "../assets/clock.svg";
import badge from "../assets/badge.svg";
import zarp from "../assets/zarp.svg";
import sun from "../assets/sun.svg";
import close from "../assets/close.svg";
import arrow from "../assets/arrow.svg";
import enter from "../assets/command-2.svg";



const SearchBody = () => {
    const [storedSearchHistory, setStoredSearchHistory] = useState([]);
    const [searchTime, setSearchTime] = useState(0);

    // Load search history from local storage
    useEffect(() => {
        const storedSearchHistory = localStorage.getItem('searchHistory');

        if (storedSearchHistory) {
            try {
                setStoredSearchHistory(JSON.parse(storedSearchHistory));
            } catch (error) {
                console.error('Error parsing search history:', error);
            }
        }
    }, []);

    console.log("history", storedSearchHistory);


    // simulate a search and calaculate time 
    const performSearch = () => {
        const startTime = performance.now();

        setTimeout(() => {
            const endTime = performance.now(); 
            const timeTaken = endTime - startTime; 
            setSearchTime(timeTaken); 
        }, 2000);

    }

    return (
        <div className="searchbody shadow-lg mt-4 w-[550px] h-fit bg-zinc-100 bg-opacity-25 rounded border border-black border-opacity-25 backdrop-blur-sm" >
            <div className="searchbody-top p-2 flex items-center gap-3 ">
                <div className="recent-search flex items-center gap-4">
                    <img src={clock} alt="" className='h-4 w-4' />
                    <p className='text-black  font-normal'>recent search</p>
                </div>
                <div className="search-history p-2 flex items-center gap-3">
                    {storedSearchHistory.map((searchItem, index) => (
                        <div
                            key={index}
                            className="recent py-1 text-sm px-2 flex items-center w-fit bg-zinc-500 bg-opacity-25 rounded-sm"
                        >
                            <p>{searchItem}</p>
                            <img
                                src={close}
                                alt=""
                                className="h-3 w3 ml-2 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

            </div>
            <div className="search-content">
                <div className="relative ">
                    <div className="search-result p-2 mt-2 gap-3 flex-col flex ">
                        <div className="all flex gap-5 ">
                            <img src={zarp} alt="" className='w-5 h-5' />
                            <p className='text-grey-100 '>all</p>
                            <div className=" w-fit  px-2 text-center bg-zinc-500 bg-opacity-25 rounded-sm text-fuchsia-700" >
                                <span>400</span>
                            </div>
                        </div>
                        <div className="words flex gap-5 ">
                            <img src={sun} alt="" className='w-5 h-5' />
                            <p className='text-grey-100 '>words</p>
                            <div className=" w-fit  px-2 text-center bg-zinc-500 bg-opacity-25 rounded-sm text-blue-700" >
                                <span>5000</span>
                            </div>
                        </div>
                        <div className="images flex gap-5 ">
                            <img src={badge} alt="" className='w-5 h-5' />
                            <p className='text-grey-100 '>images</p>
                            <div className=" w-fit  px-2 text-center text-pink-600 bg-zinc-500 bg-opacity-25 rounded-sm" >
                                <span>40</span>
                            </div>
                        </div>
                    </div>
                    <div className=" search-bottom bg-zinc-200 bg-opacity-25  w-full">
                        <div className="bottom--content flex justify-between  p-2 ">
                            <div className="time flex items-center">
                                <img src={clock} alt="" className="h-5 w-5" />
                                <div className="w-fit ml-2 text-sm px-2 text-center bg-zinc-500 bg-opacity-25 rounded-sm text-blue-700">
                                    <span>{searchTime} ms</span>
                                </div>
                            </div>
                            <div className="close flex items-center">
                                <span className='px-1 text-sm border rounded-sm border-slate-700'>esc</span>
                                <p className='ml-2'>close</p>

                            </div>
                            <div className="navigate flex items-center">
                                <div className="arrow  flex items-center">
                                    <img src={arrow} alt="" className='h-4 w-4' />
                                    <img src={arrow} alt="" className='h-4 w-4 rotate-180' />
                                </div>
                                <p className='ml-2'>navigate</p>
                            </div>
                            <div className="command flex items-center">
                                <img src={enter} alt="" className='h-5 w-5' />
                                <p className="ml-2">search</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SearchBody