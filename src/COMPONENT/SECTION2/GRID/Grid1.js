import React from 'react'
import './grid.css'
import project1 from '../../IMAGES/project1.jpeg'
import project2 from '../../IMAGES/project2.jpg'
import project3 from '../../IMAGES/project3.jpeg'
import project4 from '../../IMAGES/project4.jpeg'
import project5 from '../../IMAGES/project5.jpeg'
import project6 from '../../IMAGES/project6.png'

import Card from './Card'
const Grid1 = () => {
  return (
    <div className='grid container'>
      <div class="row">
        <div className='col-md-6 col-sm-12'>
          <div data-aos="fade-up-right" className='col-sm-12'><Card image={project1} title="House of Cards" p="Branding, Photography, UI/UX" /> </div>

          <div className='col-sm-12'>
            <div className='row'>
              <div data-aos="fade-up-right" data-aos-delay="100" className='col-md-6'>        <Card image={project2} title="An Eluardian Instance" p="Branding, Photography" />
              </div>
              <div data-aos="fade-up-right" data-aos-delay="200" className='col-md-6'>        <Card image={project3} title="Falling into Place" p="Motion, Photography" />
              </div></div>
          </div>
        </div>
        <div className='col-md-6 col-sm-12'>
          <div className='col-md-12'>
            <div className='row'>

              <div data-aos="fade-up-right" data-aos-delay="300" className='col-md-6'>        <Card image={project4} title="Reality in Motion" p="Motion, UI/UX" />
              </div>
              <div data-aos="fade-up-right" data-aos-delay="400" className='col-md-6'>        <Card image={project5} title="An Eluardian Instance" p="Branding, Photography" />
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right" data-aos-delay="500" className='col-md-12'>

            <Card image={project6} title="An Eluardian Instance" p="Branding, Photography" /> </div>

        </div>
      </div>
    </div>
  )
}

export default Grid1
