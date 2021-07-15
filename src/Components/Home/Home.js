import React from 'react';
import ChartGrid from './ChartGrid';
import OverdueRow from './OverdueRow';

const Home = (props)=>{
    return <div>
        <OverdueRow/>
        <ChartGrid/>
    </div>
}

export default Home;