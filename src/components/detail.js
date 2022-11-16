function Detail(props){
    return <div>
        <table className="table">
        <tr>
            <td>Comment</td>
            <td>Date & Time</td>
            <td>Sentimate</td>
        </tr>
        {props.data.externalTweets.map(e=>{
        return <tr>
            <td>{e.tweet}</td>
            <td>{e.date}</td>
            <td>{e.sentimentPolarityLabel}</td>
        </tr>

        })}
        </table>
    </div>
}

export default Detail;