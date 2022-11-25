export function getDetailInfo(timeline,index, socialMedia, sentiment){
    let data = [];
      if(socialMedia == "twitter"){
        timeline[index].externalTweets.map(e=>{
            if(sentiment.toLowerCase() == e.sentimentPolarityLabel.toString().toLowerCase())
            data.push({"comment": e.tweet, "date":e.created, "sentiment": e.sentimentPolarityLabel})
        })
    }
    else{
            timeline[index].comments.map(e=>{
                if(sentiment.toLowerCase() == e.sentimentPolarityLabel.toString().toLowerCase())
                data.push({"comment": e.asReplyToPostMessage, "date":e.date.substring(0,10), "sentiment": e.sentimentPolarityLabel})
            })
        }
    

   

    return data;
}