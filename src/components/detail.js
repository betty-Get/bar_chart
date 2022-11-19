import './detail.css'
function Detail(props){
    return <div  className="mytable">
        <table>
        <tr>
            <td>Comment</td>
            <td className='dateSection'>Date & Time</td>
            <td className='sentimentSection'>Sentimate</td>
        </tr>
        
        {/* console.log({props.data.externalTweets.created}) */}
        {props.data.map(e=>{
        return <tr>
            <td className='commentSection'>{e.comment}</td>
            <td className='dateSection'>{e.date}</td>
            <td className='sentimentSection'>{e.sentiment}</td>
        </tr>

        })}
        </table>
    </div>
}

export default Detail;