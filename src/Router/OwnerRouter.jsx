import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OwnerHome from '../Components/Owner/OwnerHome'


const OwnerRouter = () => {
    return (
        <div>
            <div className='w-full h-2 bg-pink-950'></div>
            <div className='flex'>
                <OwnerHome />
                <div>
                    <Routes>
                    
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default OwnerRouter
