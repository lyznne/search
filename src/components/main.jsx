import React from 'react'



import Footer from './Footer';
import SearchBody from './SearchBody';
import ModeSwitch from './ModeSwitch';
import SearchBar from './SearchBar';


const Main = () => {


    return (
        <div className="app m-10 p-2 ">

            <ModeSwitch />


            <div className="search__component mt-24 h-full justify-center items-center flex ">
                <div className="">
                    <SearchBar />
                    <SearchBody />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Main;




// const axios = require('axios');


// const options = {
//   method: 'GET',
//   url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
//   params: {term: 'wat'},
//   headers: {
//     'X-RapidAPI-Key': 'c4f8d7c594mshb9012d82c8bef86p142dedjsn8226a1e0c010',
//     'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }