import React, {useState, useEffect} from 'react'
import DataFetch from './components/dataFetch';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    DataFetch()
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, []);
  console.log(data)
  return (
    <div className='App'>
      <svg></svg>  
    </div>
  )
}

export default App;