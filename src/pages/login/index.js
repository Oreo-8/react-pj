import './index.scss';
import LoginForm from "../../components/login-form"
import {useNavigate} from 'react-router-dom';
import React from 'react';

export default function Login() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem("token",JSON.stringify(values))
        navigate("/user",{replace:true})
    };

    return (
        <>
            <div className='login-index'>
                <LoginForm onFinish={onFinish} />
            </div>
        </>
    )
}