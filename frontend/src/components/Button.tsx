import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button
} from 'antd';

interface Props {
    to : string;
    danger : boolean;
    text : string;
    styles? : any;
}

const CustomButton = ( props : Props ) => {
    return (
        <Link to={props.to}>
            <Button
                style={props.styles}
                type="dashed"
                danger={props.danger}
            >
                {props.text}
            </Button>
        </Link>
    )
}

export default CustomButton;
