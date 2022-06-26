import React from 'react';

const About = () => {
    return (
        <div>

            <div className="imgres text-center">
                <img src={require("../static/logo-removebg-preview.png")}/>
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-4 col-md-4 ms-5">
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                        <div className="row">
                            <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10 mt-0">
                            <h1 class="fw-bolder">Welcome to Blog Home!</h1>
                                <p class="lead">Feel free to search and write posts on topics you like</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;