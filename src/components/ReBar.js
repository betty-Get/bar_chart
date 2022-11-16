import Plot from 'react-plotly.js';

function ReBar (props){
    let date = [];
    let negData = [];
    let posData = [];
    let neuData = [];

    props.data.map(e=>{
        date.push(e.top20TweetsByFollowers[3].created);
        negData.push(e.sentimentAsCategories.negativeTweets);
        posData.push(e.sentimentAsCategories.positiveTweets);
        neuData.push(e.sentimentAsCategories.neutralTweets);
    })
    
    let data = [
        {
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
        }
    ];
    return <div>
        <Plot data={data} onClick={e=>props.onClick(e)}/>
    </div>
}

export default ReBar;