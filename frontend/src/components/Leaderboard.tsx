import React, { useState, useEffect } from 'react';
import { TStudent } from '../containers/Leaderboard/@types';
import Utility from '../containers/utility';
import CustomButton from './Button';
import {
    Row,
    Col,
    Input,
    Table,
    Select
} from 'antd';

const { Search }  = Input;
const { Option } = Select;

const columns = [
    {
        title : 'Rank',
        dataIndex : 'rank'
    },
    {
        title : 'Student Name',
        dataIndex : 'name'
    },
    {
        title : 'Roll number',
        dataIndex : 'roll_number'
    },
    {
        title : 'Math Score',
        dataIndex : 'math_marks',
        sorter : {
            compare : (a : any,b : any) => a.math_marks - b.math_marks,
            multiple : 3
        }
    },
    {
        title : 'Physics Score',
        dataIndex : 'physics_marks',
        sorter : {
            compare : (a : any,b : any) => a.physics_marks - b.physics_marks,
            multiple : 2
        }
    },
    {
        title : 'Chemistry Score',
        dataIndex : 'chemistry_marks',
        sorter : {
            compare : (a : any,b : any) => a.chemistry_marks - b.chemistry_marks,
            multiple : 1
        }
    },
    {
        title : 'Total Score',
        dataIndex : 'total',
        sorter : {
            compare : (a : any,b : any) => a.total - b.total,
            multiple : 4
        }
    },
    {
        title : 'Percentage %',
        dataIndex : 'percentage',
        sorter : {
            compare : (a : any,b : any) => a.percentage - b.percentage,
            multiple : 5
        }
    }
]

interface Props {
    students : TStudent[]
}

const Leaderboard = ( props : Props ) => {

    const initialData = props.students.map((student : TStudent, index : number) => {
        const math = student.math_marks;
        const physics = student.physics_marks;
        const chemistry = student.chemistry_marks;
        return {
            key : student.id,
            rank : index+1,
            name : student.name,
            roll_number : student.roll_number,
            math_marks : math,
            physics_marks : physics,
            chemistry_marks : chemistry,
            total : Utility.calcaluteTotal(math,physics,chemistry),
            percentage : Utility.calculatePercentage(math,physics,chemistry)
        }
    })

    initialData.sort(function(a,b){
        return - a.percentage + b.percentage;
    });

    const [ field, setField ] = useState("name");
    const [ searchText, setSearchText ] = useState('');
    const [ data, setData ] = useState<any[]>(initialData);


    useEffect(() => {
        if(!searchText.length){
            setData(initialData);
        }else{
            const filteredData = initialData.filter((data : any) => data[field].toLowerCase().includes(searchText.toLowerCase()));
            filteredData.sort(function(a,b){
                return - a.percentage + b.percentage;
            });
            setData(filteredData);
        }
        // eslint-disable-next-line
    },[field, searchText]);

    const onSearch = (value : string) => {
        setSearchText(value);
    } 

    const handleChange = ( value : string) => {
        setField(value);
    }

    return (
        <div style={{ marginTop : 20 }}>
            <Row>
                 <Col span={12} offset={2}>
                     <CustomButton to="/" danger={true} text="Home"/>
                     <CustomButton to="/create" danger={true} text="Enter Marks" styles={{marginLeft : 20}}/>
                 </Col>

                <Col span={12} offset={6}>
                    <h1>Leaderboard</h1>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Search
                        placeholder="search"
                        onSearch={onSearch}
                        style={{width : "40vh"}} 
                    />

                    <Select defaultValue="name" style={{width : "30vh"}} onChange={handleChange}>
                        <Option value="name">Search by Name</Option>
                        <Option value="roll_number">Search by Roll number</Option>
                    </Select>
                </Col>
                <Col span={24}>
                    {props.students.length>0 && <Table columns={columns} dataSource={data.length===0 ? initialData : data}/>}
                </Col>
            </Row>
        </div>
    )
}

export default Leaderboard
