import React from 'react';
import CustomButton from './Button';
import { Row, Col } from 'antd';

const Home = () => {
    return (
        <div style={{ marginTop : 20}}>
            <Row>
                <Col span={12} offset={6}>
                    <h1>Welcome to Student Leaderboard!</h1>
                </Col>
            </Row>

            <Row style={{ marginTop : 100}}>
                <Col span={6} offset={6}>
                    <CustomButton to="/create" danger={true} text="Enter Marks"/>  
                </Col>

                <Col span={6}>
                    <CustomButton to="/leaderboard" danger={true} text="Learboard"/>  
                </Col>
            </Row>
        </div>
    )
}

export default Home
