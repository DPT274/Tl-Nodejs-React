import React, { Component } from 'react';

class Sliderr extends Component {
    render() {
        return (
            <div className="carousel-container">
                <div className="left-image">
                    <img src="/images/ht.jpg" alt="Left" />
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" 
                     data-ride="carousel" data-interval="3000"> {/* Set interval to 3 seconds */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/images/hinhnen.jpg" height={500} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/c1.jpg" height={500} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/c2.jpg" height={500} alt="Third slide" />
                        </div>
                     
                    </div>
                    <a className="carousel-control-prev highlight" 
                       href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next highlight" 
                       href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="right-image">
                    <img src="/images/hp.jpg" alt="Right" />
                </div>
            </div>
        );
    }
}

export default Sliderr;
