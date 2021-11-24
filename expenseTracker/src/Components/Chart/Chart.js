import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const valueArr = props.dataPoints.map( d => d.value);
    const maxVal = props.maxValue//Math.max( ...valueArr );

    return <div className="chart">
        {props.dataPoints.map(
            dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxVal} label={dataPoint.label} />
        )}
    </div>
}

export default Chart;