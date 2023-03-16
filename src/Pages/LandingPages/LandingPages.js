import React from 'react';
import Card from './Card';
import admin from '../..//Assets/admin.png';
import student from '../..//Assets/student.png';
import teacher from '../..//Assets/teacher.png';

const LandingPages = () => {
    const roles = [
        {
            id: 1,
            name: 'Admin',
            img: admin,
            url: 'adminlogin'
        },
        {
            id: 2,
            name: 'Student',
            img: student,
            url: 'studentlogin'
        },
        {
            id: 3,
            name: 'Teacher',
            img: teacher,
            url: 'teacherlogin'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                roles.map(role => <Card
                    key={role.id}
                    role={role}
                ></Card>)
            }
        </div>
    );
};

export default LandingPages;