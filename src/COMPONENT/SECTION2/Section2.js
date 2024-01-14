import React, { useState } from 'react'
import './section2.css'

import Grid1 from './GRID/Grid1'
import Branding from './Branding'

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <div className='section2'>
            <div className='top_heading'>
                <p>Branding & digital design studio
                </p>
                <h2>Create experiences and solve
                    business problems</h2>
            </div>
            <div className='filter'>
                <ul>
                    <li onClick={() => handleTabClick(1)}><a className={activeTab === 1 ? 'active' : ''} >All</a></li>
                    <li onClick={() => handleTabClick(2)}><a className={activeTab === 2 ? 'active' : ''} >branding</a></li>
                    <li onClick={() => handleTabClick(3)}><a className={activeTab === 3 ? 'active' : ''} >motion</a></li>


                </ul>
            </div>

            {activeTab === 1 && <div className="tab-content"><Grid1/></div>}
            {activeTab === 2 && <div className="tab-content"><Branding/></div>}
            {activeTab === 3 && <div className="tab-content"><Grid1/></div>}
        </div>
    )
}

export default Section2
