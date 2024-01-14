import React from 'react'
import './GRID/grid.css'
import project1 from '../../COMPONENT/IMAGES/project1.jpeg'

import project4 from '../../COMPONENT/IMAGES/project4.jpeg'
import project5 from '../../COMPONENT/IMAGES/project5.jpeg'


import Card from './GRID/Card'
const Branding = () => {
  return (
    <div className='grid container'>
      <div class="row">
        <div className='col-md-6 col-sm-12'>
          <div data-aos="fade-up-right" className='col-sm-12'><Card  image={project1} title="House of Cards" p="Branding, Photography, UI/UX" /> </div>


        </div>
        <div className='col-md-6 col-sm-12'>
          <div className='col-md-12'>
            <div className='row'>

              <div data-aos="fade-up-right" data-aos-delay='200' className='col-md-6'>        <Card image={project4} title="Reality in Motion" p="Motion, UI/UX" />
              </div>
              <div data-aos="fade-up-right" data-aos-delay='400' className='col-md-6'>        <Card image={project5} title="An Eluardian Instance" p="Branding, Photography" />
              </div>
            </div>
          </div>

        </div>
      </div>  </div>
  )
}

export default Branding
