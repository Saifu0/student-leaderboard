import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import DumpLeaderboard from '../../components/Leaderboard';

const Leaderboard = () => {

    const [students, setStudents ] = useState([]);

    useEffect(() => {
        axios.get('/')
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => {
                console.log('err');
            });
    },[]);
    
    return (
        <div>
            <DumpLeaderboard students={students}/>
        </div>
    )
}

export default Leaderboard
