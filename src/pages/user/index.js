import React, { Component } from 'react'
// 导入路由
import {  Outlet } from 'react-router-dom'

export default class User extends Component {
    render() {
        return (
            <div>
                <div>User</div>
                <Outlet/>
            </div>
        )
    }
}