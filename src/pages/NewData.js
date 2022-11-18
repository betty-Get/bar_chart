import Axios from 'axios';
import React,{useState, useEffect} from 'react'
import Detail from '../components/detail';
import ReBar from '../components/ReBar';

function NewData() {
    const [twitterData, setTwitterData] = useState([]);
    const [detailData, setDetailData] = useState([]);
    const [rawData, setRawData] = useState([]);
    let date = [];
    let negData = [];
    let posData = [];
    let neuData = [];
    

    const getData = (url,src)=>{
      Axios.get(url).then(res=>{
        if(src == "twitter")
        
        res.data.twitter.timelineStats.timeline.map(e=>{
          date.push(e.top20TweetsByFollowers[3].created);
          negData.push(e.sentimentAsCategories.negativeTweets);
          posData.push(e.sentimentAsCategories.positiveTweets);
          neuData.push(e.sentimentAsCategories.neutralTweets);
      });
      setRawData([{
        x: date,
        y: negData,
        name: 'Negative',
        type: 'bar'
    },
    {
        x: date,
        y: neuData,
        name: 'Neutral',
        type: 'bar'
    },
    {
        x: date,
        y: posData,
        name: 'Posetive',
        type: 'bar'
    }]);
      setTwitterData(res.data.twitter.timelineStats.timeline);
      })
    }

    const handleClick = (e) =>{
      setDetailData([e.points[0].pointIndex]);
    }

    useEffect(()=>{
      getData("http://localhost:3000/stats","twitter");
    },[])


  return (
    <div>
      {twitterData.length !=0 && <ReBar data = {rawData} onClick={handleClick}/>}
      {detailData.length != 0 && <Detail data={detailData}/>}
    </div>
  )
}

export default NewData
