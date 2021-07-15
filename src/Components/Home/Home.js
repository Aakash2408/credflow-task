import React from 'react';
import ChartGrid from './ChartGrid';
import OverdueRow from './OverdueRow';
import PolygonRow from './PolygonRow';

const Home = (props)=>{
    return <div>
        <OverdueRow data={props.data}/>
        <PolygonRow/>
        <ChartGrid data={props.data}/>
    </div>
}

export default Home;