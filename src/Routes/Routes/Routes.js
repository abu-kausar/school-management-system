import AdminLogin from "../../Pages/Login/AdminLogin";
import StudentLogin from "../../Pages/Login/StudentLogin";
import TeacherLogin from "../../Pages/Login/TeacherLogin";

const { createBrowserRouter } = require("react-router-dom");
const { default: Portal } = require("../../Layout/Portal");
const { default: LandingPages } = require("../../Pages/LandingPages/LandingPages");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Portal></Portal>,
        children: [
            {
                path: '/',
                element: <LandingPages></LandingPages>
            },
            {
                path: '/adminlogin',
                element: <AdminLogin></AdminLogin>
            },
            {
                path: 'studentlogin',
                element: <StudentLogin></StudentLogin>
            },
            {
                path: 'teacherlogin',
                element: <TeacherLogin></TeacherLogin>
            }
        ]
    }
])

export default router;