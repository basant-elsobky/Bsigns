import React from 'react'
import './services.css'
import service1 from '../../IMAGES/service1.jpg'
import service2 from '../../IMAGES/service2.jpg'
import service3 from '../../IMAGES/service3.jpg'
const Services = () => {
    return (
        <div className='services  container'>
            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src={service1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          
                            </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src={service2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                            </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div class="card" >
                        <img src={service3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         
                            </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Services
