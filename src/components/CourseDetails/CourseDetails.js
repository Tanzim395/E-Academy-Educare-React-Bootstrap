import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Courses from '../Courses/Courses';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`./courses.JSON/${courseId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details);
    return (
        <div>
            <h1 className='text-3xl text-center'>Enroll Now!!!</h1>
            <br />
            <Courses></Courses>
        </div>
    );
};

export default CourseDetails;