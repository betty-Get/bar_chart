export function getBarChartData(timeline,socialMedia){
    let date = [];
    let negData = [];
    let posData = [];
    let neuData = [];
    if(socialMedia === "twitter"){
        timeline.map(e=>{
            date.push(e.top20TweetsByFollowers[3].created);
            negData.push(e.sentimentAsCategories.negativeTweets);
            posData.push(e.sentimentAsCategories.positiveTweets);
            neuData.push(e.sentimentAsCategories.neutralTweets);
        });
    }

    else{
        timeline.map(e=>{
            date.push(e.date);
            negData.push(e.sentimentAsCategories.negativeComments)
            posData.push(e.sentimentAsCategories.positiveComments)
            neuData.push(e.sentimentAsCategories.neutralComments)
        })
    }

    return [
        {
            x: date,
            y: negData,
            name: 'Negative',
            type: 'bar',
            marker: {color: 'red'}
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
            name: 'Positive',
            type: 'bar'
        }
    ]
}