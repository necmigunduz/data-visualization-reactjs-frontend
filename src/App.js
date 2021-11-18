import React, {useState, useEffect} from 'react'
import DataFetch from './components/dataFetch';

const App = () => {
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    DataFetch()
      .then(result => setRatings(result))
      .catch(err => console.error(err));
  }, []);

  console.log(ratings)

  return (
    <div className='App'>
      <svg></svg>  
    </div>
  )
}

export default App;