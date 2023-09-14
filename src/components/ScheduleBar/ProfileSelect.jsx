import React from 'react'
import {BiChevronDown} from "react-icons/bi"
import Ellipse5 from "../../assets/Ellipse5.png"
const ProfileSelect = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex'>
       <img src={Ellipse5} alt="Andri" width={50} height={50} />
       <div>
           <p className='heading_text'>Andri</p>
           <p className='text-sm' style={{color:"#FA4907"}}  >UI Designer</p>
         </div>
       </div>
       <BiChevronDown size={24}/>
    </div>
  )
}

export default ProfileSelect