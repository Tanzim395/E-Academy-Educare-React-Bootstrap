import './Home.css'
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import KeyCourse from '../KeyCourse/KeyCourse';

const Home = () => {
    const [keyCourses, setkeyCourses] = useCourses();
    console.log(keyCourses);

    return (
        <div>

            <section>
                <div className='w-100 mb-5'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50 img-fluid"
                                src="https://media.architecturaldigest.com/photos/58ac753b5bf3275151855386/master/w_1600%2Cc_limit/1%252520-%252520Moody%252520Center%252520-%252520%252520Credit%252520Nash%252520Baker.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <button className="btn btn-info">Click Here</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src="https://www.chittagongttc.gov.bd/admin/upload/gallery/1457280125_56dc547de17b2_1computer.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className="btn btn-info">Click Here</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-50 img-fluid"
                                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                <button className="btn btn-info">Click Here</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </section>

            <section>
                <div className='mt-20'>
                    <h1 className='text-center text-4xl uppercase mb-3'>Top Reviewed <span className='text-blue-400'>Courses</span></h1>
                </div>
                <hr />
                <div className='grid grid-cols-4 gap-10 p-8 m-4 bg-gray-400 border rounded-3xl'>
                    {
                        keyCourses.slice(0, 4).map(keyCourse => <KeyCourse
                            key={keyCourse.id}
                            keyCourse={keyCourse}

                        >

                        </KeyCourse>)
                    }
                </div>
            </section>

            <section class="container my-5 bg-light">
                <h1 class="text-center fs-1 my-5">
                    <span class="text-info">A Day In life in E-Academy</span>
                </h1>
                <div class="row">

                    <div class="col-md-6 d-flex  justify-content-center align-items-center g-5 ">
                        <div class=" w-100">
                            <div>
                                <h1 class="text-center">Explore Enthuism of the Modern Technology</h1>
                                <p>
                                    Hello everyone! I’m Mishani, a third-year student at E-Academy, and I’d like to share my experience of studying Modern AI. I’ll be talking about class structure, modules and teaching methods as well as how the overall experience has been so far. I hope this helps anyone looking to pursue a similar degree here.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex justify-content-center g-5">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YRqliylx3aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Home;