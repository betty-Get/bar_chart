import Axios from 'axios';
import React,{useState, useEffect} from 'react'
import Detail from '../components/detail';
import ReBar from '../components/ReBar';

function NewData() {
    const [twitterData, setTwitterData] = useState([]);
    // const [facebook, setFacebookData] = useState([]);
    const [detailData, setDetailData] = useState([]);

    const getData = (url,src)=>{
      Axios.get(url).then(res=>{
        if(src == "twitter")
        setTwitterData(res.data.twitter.timelineStats.timeline);

        // else{
        //   console.log(res.data)
        //     setFacebookData(res.data.facebook.timelineStats.timeline);

        // }
      })
    }

    const handleClick = (e) =>{
      setDetailData(facebook[e.points[0].pointIndex]);
    }

    useEffect(()=>{
      getData("http://localhost:3000/stats","twitter");
      // getData("http://localhost:8000/ProfileInfo","facebok");
    },[])


  return (
    <div>
      {twitterData.length !=0 && <ReBar data = {twitterData} onClick={handleClick}/>}
      {/* {twitterData.length !=0 && <ReBar data = {facebook} onClick={handleClick}/>} */}
      {detailData.length != 0 && <Detail data={detailData}/>}
    </div>
  )
}

export default NewData
