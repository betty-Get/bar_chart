import Plot from 'react-plotly.js';
// import '../App.css'
function ReBar (props){
    return <div>
        <Plot className='modify_width' data={props.data} onClick={e=>props.onClick(e)}
        layout={{width: 530, height: 500}}
        />
        
    </div>
}

export default ReBar;