import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomButton from './Button';
import Utility from '../containers/utility';
import {
    Row, 
    Col,
    Form,
    Input,
    InputNumber,
    Button,
    Alert
} from 'antd';

const validateMessages = {
    // eslint-disable-next-line 
    required : '${label} is required!',
    number : {
        // eslint-disable-next-line 
        range : '${label} must be between ${min} and ${max}'
    }
}

const CustomForm = () => {

    const [total, setTotal ] = useState(0);
    const [maths, setMaths] = useState(0);
    const [physics, setPhysics] = useState(0);
    const [chemistry, setChemistry] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [ sucess, setSuccess ] = useState('');

    useEffect(() => {   
        setTotal(Utility.calcaluteTotal(maths,physics,chemistry));
        setPercentage(Utility.calculatePercentage(maths,physics,chemistry));
    },[maths,physics,chemistry]);

    const onFinish = ( values : any ) => {
        setSuccess('Entry entered successfully!');
        setTimeout(() => {
            setSuccess('');
        },5000);

        const postObj = {
            name : values.user.name,
            roll_number : values.user.roll_number,
            math_marks : values.user.math_marks,
            physics_marks : values.user.physics_marks,
            chemistry_marks : values.user.chemistry_marks
        }

        console.log(postObj);

        axios.post('/create/',postObj)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message));
    }

    return (
        <div style={{ marginTop : 20}}>
             <Row>
                 <Col span={12} offset={2}>
                    <CustomButton to="/" danger={true} text="Home"/>
                    <CustomButton to="/leaderboard" danger={true} text="Leaderboard" styles={{marginLeft : 20}}/>
                 </Col>

                <Col span={12} offset={6}>
                    <h1>Fill the entries</h1>
                </Col>
            </Row>
            <Form
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
                onFinish={onFinish}
                name="nest-messages"
                validateMessages={validateMessages}
            >
                <Row>
                    <Col span={10} offset={8}>
                        <Form.Item 
                            name={['user', 'name']} 
                            label="Student Name" 
                            rules={[{required : true}]}> 
                            <Input placeholder="Saifur Rehman Khan"/>
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={8} >
                        <Form.Item 
                            name={['user', 'roll_number']} 
                            label="Roll number" 
                            rules={[{required : true}]}> 
                            <Input placeholder="18BCS083"/>
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={8}>
                        <Form.Item 
                            name={['user', 'math_marks']} 
                            label="Marks Obtained in Maths" 
                            rules={[{ type : 'number', min : 0, max : 100, required : true}]}> 
                            <InputNumber 
                                placeholder="out of 100"
                                onChange={(value : any) => setMaths(value)}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={8}>
                        <Form.Item 
                            name={['user', 'physics_marks']} 
                            label="Marks Obtained in Physics" 
                            rules={[{ type : 'number', min : 0, max : 100, required : true}]}> 
                            <InputNumber 
                                placeholder="out of 100"
                                onChange={(value : any) => setPhysics(value)}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={8}>
                        <Form.Item 
                            name={['user', 'chemistry_marks']} 
                            label="Marks Obtained in Chemistry" 
                            rules={[{ type : 'number', min : 0, max : 100, required : true}]}> 
                            <InputNumber 
                                placeholder="out of 100"
                                onChange={(value : any) => setChemistry(value)}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={8}>
                        <Form.Item 
                            label="Total"> 
                            <InputNumber 
                                disabled
                                placeholder={total.toString()}
                                />
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={8}>
                        <Form.Item 
                            label="Percentage"> 
                            <InputNumber 
                                disabled
                                placeholder={percentage.toString()}
                                />
                        </Form.Item>
                    </Col>

                    <Col span={10} offset={10}>
                        <Form.Item> 
                            <Button 
                                htmlType="submit"
                                type="primary"
                            >Create</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            { sucess && <Alert message={sucess} type="success"/>}
        </div>
        
    )
}

export default CustomForm
 