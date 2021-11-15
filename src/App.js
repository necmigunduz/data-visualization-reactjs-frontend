import React, { useState, useRef, useEffect } from 'react'
import DataFetch from './components/dataFetch';
import * as d3 from 'd3';

const App = () => {
  const [data,setData] = useState([])
  // const [data] = useState([25,55,45,67,23,69,80])

  const svgRef = useRef()
  
  const getStat =  async () => {
    const url = `http://localhost:5000/api/statistics`

    let stat = await DataFetch(url)

    let values = []
    stat.statistics.map((val)=> {
      if(val.Value < 2500){
        values.push((val.Value))
      }
      return values
    })
    return setData(values)
  }
  getStat()

  useEffect(() => {    
    // setting up svg
    const w = 10000;
    const h = 2500;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background-color', '#d3d3d3')
      .style('margin', '75')
      .style('overflow','visible')

    // setting the scale
    const xScale = d3.scaleLinear()
        .domain([0, data.length-1])
        .range([0,w])
    const yScale = d3.scaleLinear()
        .domain([-100,h])
        .range([h,-100 ])
    const generateScaledLine = d3.line()
      .x((d,i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal)

    // setting the axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(100)
      .tickFormat(i => i + 1)
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h})`)
    svg.append('g')
      .call(yAxis)

    // setting the data
    svg.selectAll('.line')
      .data([data])
      .join('path')
        .attr('d', d => generateScaledLine(d))
        .attr('fill','none')
        .attr('stroke','black')
  })

  return (
    <div className='App'>
      <svg ref={svgRef}></svg>  
    </div>
  )
}

export default App;