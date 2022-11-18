function Detail(props){
    return <div>
        <table className="table">
        <tr>
            <td>Comment</td>
            <td>Date & Time</td>
            <td>Sentimate</td>
        </tr>
        
        {/* console.log({props.data.externalTweets.created}) */}
        {props.data.map(e=>{
        return <tr>
            <td>{e.comment}</td>
            <td>{e.date}</td>
            <td>{e.sentiment}</td>
        </tr>

        })}
        </table>
    </div>
}

export default Detail;