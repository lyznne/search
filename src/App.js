import './App.css';

function App() {
  return (
    <div className="App">
      <h2>hi there </h2>
    </div>
  );
}

export default App;

// urban dictionary





const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: 'wat'},
  headers: {
    'X-RapidAPI-Key': 'c4f8d7c594mshb9012d82c8bef86p142dedjsn8226a1e0c010',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}