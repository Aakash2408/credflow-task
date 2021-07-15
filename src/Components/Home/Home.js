import React from 'react';
import ChartGrid from './ChartGrid';
import OverdueRow from './OverdueRow';

const Home = (props)=>{
    return <div>
        <OverdueRow/>
        <ChartGrid data={props.data}/>
    </div>
}

export default Home;