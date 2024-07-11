import React, { useEffect, useState } from 'react';
import courseData from "./../../courseData/courseData";
import Cards from '../Cards/Cards';

const Courses = (props) => {
    const handleClick=props.handleClick;
    const [coursesList, setCoursesList] = useState([]);
    useEffect(() => {
        setCoursesList(courseData);
    }, []);
    return (
        <div>
            <div className='d-flex flex-wrap card-deck justify-content-around'>
                {
                    coursesList.map( course => {
                        return <Cards courseInfo={course} handleClick={handleClick}></Cards>
                    })
                }
            </div>
        </div>
    );
};

export default Courses;