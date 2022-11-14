import React, {useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import  Axios  from 'axios';

function BarChart() {

    const [chartData, setChartData] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3000/ProfileInfo')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

  return (
    <div>
      <Plot 
        data = {[
            {
              x: ['giraffes', 'orangutans', 'monkeys'],
              y: [20, 14, 23],
              type: 'bar'
            }
          ]}
      />
    </div>
  )
}

export default BarChart
