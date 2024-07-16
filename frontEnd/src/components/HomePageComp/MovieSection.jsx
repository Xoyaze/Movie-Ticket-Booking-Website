import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MovieSection = () => {
  return (
    <div className='h-auto w-full relative -top-[8vh]'>
        <div className='h-[8vh] w-full flex justify-center items-center gap-8'>
            <NavLink className={`hover:text-gray-200`} to={'popular'}>Popular Movies</NavLink>
            <NavLink className={`hover:text-gray-200`} to={'trending'}>Trending Movies</NavLink>
            <NavLink className={`hover:text-gray-200`} to={'now_playing'}>Now Playing Movies</NavLink>
        </div>

        <Outlet />
    </div>
  )
}

export default MovieSection
