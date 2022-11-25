import twitterJson from "./json/twitterData.json";
import facebookJson from "./json/facebookData.json";
import { useEffect, useState } from "react";
import { getBarChartData } from "./utils/getBarChartData";
import ReBar from "./components/ReBar";
import './App.css';
import { getDetailInfo } from "./utils/getDetailInfo";
import Detail from "./components/detail";

function App() {
  const [twitterData, setTwitterData] = useState([]);
  const [facebookData, setFacebookData] = useState([]);
  const [detailInfo, setDetailInfo] = useState([]);
//state update lemarge
  useEffect(()=>{
    let twitterD = getBarChartData(twitterJson.stats.twitter.timelineStats.timeline,"twitter");
    let facebookD = getBarChartData(facebookJson.stats.facebook.timelineStats.timeline,"facebook");
    setTwitterData(twitterD);
    setFacebookData(facebookD);
  },[]);

  const handleClick = (index,type) =>{
    let sentiment = index.points[0].fullData.name 
    let tableData;
    if(type == "twitter"){
      tableData = getDetailInfo(twitterJson.stats.twitter.timelineStats.timeline,index.points[0].pointIndex,"twitter",sentiment)
    }
    else{
      tableData = getDetailInfo(facebookJson.stats.facebook.timelineStats.timeline,index.points[0].pointIndex,"facebook",sentiment)
    }

    setDetailInfo(tableData);
  }


  return (
      <div className="App">
        <div className="barchart">
          {twitterData !=0 && <ReBar data={twitterData} onClick={(e)=>handleClick(e,"twitter")}/>}
          {facebookData !=0 && <ReBar data={facebookData} onClick={(e)=>handleClick(e,"facebook")}/>}
        </div>

        {detailInfo.length != 0 && 
        <div className="detail">
          <Detail data={detailInfo}/>
        </div>}
      </div>
  );
}

export default App;
