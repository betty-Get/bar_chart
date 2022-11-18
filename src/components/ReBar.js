import Plot from 'react-plotly.js';

function ReBar (props){
    return <div>
        <Plot data={props.data} onClick={e=>props.onClick(e)}/>
    </div>
}

export default ReBar;