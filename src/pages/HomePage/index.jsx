import { Joke } from '../../components/Joke';
import './style.css';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const json = await response.json();
      setJokes(json.data);
    };

    fetchJokes();
  }, []);

  if (jokes === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
