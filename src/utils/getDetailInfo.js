export function getDetailInfo(timeline,index, socialMedia){
    let data = [];
    if(socialMedia == "twitter"){
        timeline[index].externalTweets.map(e=>{
            data.push({"comment": e.tweet, "date":e.created, "sentiment": e.sentimentPolarityLabel})
        })
    }

    else{
        timeline[index].comments.map(e=>{
            data.push({"comment": e.fbHandlerUsed, "date":e.date.substring(0,10), "sentiment": e.sentimentPolarityLabel})
        })
    }

    return data;
}