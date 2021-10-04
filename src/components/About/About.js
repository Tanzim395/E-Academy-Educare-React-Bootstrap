import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">We are one of the best institutes providing top notch computer programming education. We have the best faculty, who with their extensive industry experience provide excellent knowledge to each and every student.</Card.Subtitle>
                    <Card.Text>
                        We have already trained thousands of students and are on our journey of training many more. We provide training in the best technologies that are highly relevant in the industry currently and thus help students achieve their dream job.

                        “The secret to education lies in respecting the student” – Ralph Waldo Emerson

                        We value our students and help them build skills that will be with them throughout their career. Extensive hands-on practice during classes helps them gain expertise in the subject. This builds their confidence and problem solving ability.
                    </Card.Text>
                </Card.Body>
            </Card>


            <img className="mt-10" src="http://s24894.pcdn.co/wp-content/uploads/2018/01/logo.png" alt="" />

        </div>
    );
};

export default About;