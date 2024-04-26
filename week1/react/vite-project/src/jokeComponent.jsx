import React, { useState, useEffect } from 'react';

function JokeComponent() {
    const [chuckJoke, setChuckJoke] = useState('');
    const [joke, setJoke] = useState('');
    const [fetchTrigger, setFetchTrigger] = useState(0);

    // Fetch a Chuck Norris joke
    const fetchChuckJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setChuckJoke(data.value))
            .catch(error => console.error('Error fetching Chuck Norris joke:', error));
    };

    // Fetch a joke from icanhazdadjoke.com
    const fetchJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setJoke(data.joke))
            .catch(error => console.error('Error fetching joke:', error));
    };

    // Fetch Chuck Norris joke on mount and on fetchTrigger changes
    useEffect(() => {
        fetchChuckJoke();
    }, [fetchTrigger]);

    // Set up and clear interval for fetching jokes from icanhazdadjoke.com
    useEffect(() => {
        const intervalId = setInterval(fetchJoke, 10000);
        return () => clearInterval(intervalId);
    }, []);

    // Handle button click
    const handleButtonClick = () => {
        setFetchTrigger(prev => prev + 1);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Get Chuck Norris Joke</button>
            <p>Chuck Norris Joke: {chuckJoke}</p>
            <p>Joke: {joke}</p>
        </div>
    );
}

export default JokeComponent;
