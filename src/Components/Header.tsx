import React from 'react'
import "../Stylesheets/Header.css"
import activity from "../Assets/Images/activity.svg"

const Header:React.FC = () => {
  return (
    <div className='flex justify-start align-middle gap-2 header'>
        <img src={activity} alt="activity_icon"/>
        <p>Trending Assets</p>
    </div>
  )
}

export default Header