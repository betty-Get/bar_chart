export function getDetailInfo(timeline,index, socialMedia){
    let data = [];
    
    // if(socialMedia == "twitter"){
    //          timeline[index].externalTweets.map(e=>{
    //            if(e.sentimentPolarityLabel = "POSITIVE"){
    //             data.push({"comment": e.tweet, "date":e.created, "sentiment": e.sentimentPolarityLabel})
                
    //               }
    //             else if(e.sentimentPolarityLabel = "NEGATIVE"){
    //                 // data = [];
    //                 console.log(data.push({"comment": e.tweet, "date":e.created, "sentiment": e.sentimentPolarityLabel}))
    //             }
    //             else{
    //                 // data = [];
    //                 data.push({"comment": e.tweet, "date":e.created, "sentiment": e.sentimentPolarityLabel})
    //             }
    //         })
      //  }
      if(socialMedia == "twitter"){
        timeline[index].externalTweets.map(e=>{
            data.push({"comment": e.tweet, "date":e.created, "sentiment": e.sentimentPolarityLabel})
        })
    }
    else{
            timeline[index].comments.map(e=>{
                data.push({"comment": e.asReplyToPostMessage, "date":e.date.substring(0,10), "sentiment": e.sentimentPolarityLabel})
            })
        }
    

   

    return data;
}