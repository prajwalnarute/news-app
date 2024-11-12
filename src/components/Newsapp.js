import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
     const [search, setSearch] = useState('india');
     const [newsData, setNewsData] = useState(null);
    const API_KEY = '52d68e44e5a7401999e575f5339b947a';

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);

        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInput = (event) =>{
      setSearch(event.target.value)
    }

    //  whenever we refreshed the page then automatically news of india will be shown.
    useEffect(() =>{
        getData()
    }, [])

    
  return (
    <div>
        <nav>
            <div>
                <h1>GlobalLens</h1>
            </div>
          
            <div className="SearchBar">
                <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay updated with GlobalLens</p>
        </div>
        <div className="categoryBtn">
            <button onClick={userInput} value="Sports">Sports</button>
            <button onClick={userInput} value="Politics">Politics</button>
            <button onClick={userInput} value="Entertainment">Entertainment</button>
            <button onClick={userInput} value="Health">Health</button>
            <button onClick={userInput} value="Fitness">Fitness</button>
        </div>
        <div>
            <Card data={newsData}/>
        </div>
    </div>
  )
}

export default Newsapp;