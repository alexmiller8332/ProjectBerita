import React, { useState } from "react";
import '../App.css';
import { RiverInformation } from '../components/RiverInformation';
import { Layout } from '../layout/TopNavigation';

export default function Home() {
    const [river, setRiver] = useState('nile');
    return (
        <div className='wrapper'>
            <h1>World's Longest Rivers</h1>
            <button onClick={() => setRiver('nile')}>Nile</button>
            <button onClick={() => setRiver('amazon')}>Amazon</button>
            <button onClick={() => setRiver('yangtze')}>Yangtze</button>
            <RiverInformation name={river} />
            <Layout />
        </div>
    );
}