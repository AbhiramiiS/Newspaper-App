import React from 'react'
import NavBar from './NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.competitioncare.com/wp-content/uploads/2023/02/Newspaper-reading-for-UPSC.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="data:image/jpeg;base64,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" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">.</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">.</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="alert alert-danger" role="alert">
                                    OFFERS ON MONTHLY SUBSCRIPTION!
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">SIGN UP!!</h5>
                                                <p class="card-text">Click the link below to sign up hurry dont miss the offerrrrr</p>
                                                <a href="/add" class="btn btn-success">SIGN UP</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">CUSTOMER DETAILS!!!</h5>
                                                <p class="card-text">Customer details reviews and more feel free to check it out</p>
                                                <a href="/view" class="btn btn-primary">CHECK IT OUT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home