import React, { useState, useEffect } from 'react'
import DataFetch from './components/dataFetch';
import * as d3 from 'd3';

const App = (props) => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    DataFetch()
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    drawGraph(data)
  },[data])

  function drawGraph() {
    d3.select('#container')
      .append('svg')
      .select('svg')
      .style('width','600px')
      .style('height', '606px')
      .style('background-color', 'gray')
      .style('display', 'block')
      .style('margin', 'auto')
  }

  return (
    <div className='App'>
      <div id="container"></div>  
    </div>
  )
}

export default App;