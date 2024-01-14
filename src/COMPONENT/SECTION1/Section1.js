import React from 'react'
import '../SECTION1/section1.css'
import Navbar from './Navbar/Navbar'
import Mainsection from './Mainsection/Mainsection'
import Swiber from './SWIBER/Swiber'
const Section1 = () => {
    return (
        <div className='section1' id='section1'>
            <div className='container'>

                <Navbar />
                <Mainsection />
                <Swiber />

            </div>
        </div>
    )
}

export default Section1
