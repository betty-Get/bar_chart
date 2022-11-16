import React, {useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import  Axios  from 'axios';

function BarChart() {

    const [chartData, setChartData] = useState([]);
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [negData, setNegData] = useState([]);
    const [posData, setPosData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [rawData, setRawData] = useState([]);

    var trace1 = {
        x: [date1, date2],
        y: negData,
        name: 'Negative',
        type: 'bar'
      };
      
      var trace2 = {
        x: [date1, date2],
        y: newData,
        name: 'Neuteral',
        type: 'bar'
      };

      var trace3 = {
        x: [date1, date2],
        y: posData,
        name: 'Posetive',
        type: 'bar'
      };
      
      var data = [trace1, trace2,trace3];


      const handleClick = (index) => {
        setRawData(chartData[index]);
      }
    
    
    useEffect(()=>{
        var tweets;
        var nbrOfTweets = [];
        Axios.get('http://localhost:3000/stats')
        .then(response => {
            setChartData(response.data.twitter.timelineStats.timeline)
            setDate1( response.data.twitter.timelineStats.timeline[0].top20TweetsByFollowers[3].created.toString().substring(0,10));
            setDate2( response.data.twitter.timelineStats.timeline[1].top20TweetsByFollowers[3].created.toString().substring(0,10));
            setNegData( [response.data.twitter.timelineStats.timeline[0].sentimentAsCategories.negativeTweets, response.data.twitter.timelineStats.timeline[1].sentimentAsCategories.negativeTweets]);
            setNewData( [response.data.twitter.timelineStats.timeline[0].sentimentAsCategories.neutralTweets, response.data.twitter.timelineStats.timeline[1].sentimentAsCategories.neutralTweets]);
            setPosData( [response.data.twitter.timelineStats.timeline[0].sentimentAsCategories.positiveTweets, response.data.twitter.timelineStats.timeline[1].sentimentAsCategories.positiveTweets]);

           
            console.log(response.data.twitter.timelineStats.timeline)
           
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    // console.log("not use effect",chartData)
  return (
    <div>
      {chartData.length !== 0 && <Plot data={data} onClick={(e)=>handleClick(e.points[0].pointIndex)}/>}


      {rawData.length != 0 && <table>
        <tr>
            <td>Comment</td>
            <td>Date & Time</td>
            <td>Sentimate</td>
        </tr>
        {rawData.externalTweets.map(e=>{
        return <tr>
            <td>{e.tweet}</td>
            <td>{e.date}</td>
            <td>{e.sentimentPolarityLabel}</td>
        </tr>

        })}
      </table>}
    </div>
  )
}

export default BarChart
