import Login from "../pages/login"
import User from "../pages/user"
import TabPage from "../pages/tab-page"
import NotFind from "../pages/not-find"
import { Navigate } from 'react-router-dom';

function isNavigate(auth, element) {
    if (auth) {
        // 判断权限
        let token = localStorage.getItem("token")
        if (!token) {
            return <Navigate to="/" replace />
        }
    }
    return element
}

const routerConfig = [
    {
        path: '/',
        element: isNavigate(false, <Login/>),
    },
    {
        path: '/404',
        element: isNavigate(false, <NotFind/>),
    },
    {
        path: '/user',
        element: isNavigate(true, <User/>),
        children: [
            {
                path: "tab",
                element: isNavigate(true, <TabPage/>)
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />,
    },
]


export default routerConfig
