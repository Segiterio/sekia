import React from 'react'
import "./mainStyle.css"
import {StyleBtn} from "./utils/styleBtn"
import { imageCollection } from '../Data/imagesCollection'
import {BsThreeDotsVertical,BsSearch} from "react-icons/bs"
import {FilterIconsData} from "../Data/SideBarData"
import Layout from './utils/Layout'
import {RiMenuFoldLine} from "react-icons/ri"
import {RxHamburgerMenu} from "react-icons/rx"


const Main = ({ShowMobileMenu}) => {
  return (
    <section className='main_container' >
      <div className='header_container'>
      <div className='icon-769'>
            <RxHamburgerMenu onClick={() => {
               ShowMobileMenu(true)
            }} className='hover' />
           </div>
         <div>
            <h2 className='heading_text'>Welcome Back, Andri</h2>
            <p className='text-smPlus heading_text '>You have task <span className='highlighted_orange'>9 tasks</span> to complete</p>
         </div>
         <div className='flex '>
           <div className='search_icon-550'>
             <BsSearch/>
           </div>
           <input type="text" name="search" id="search" 
           className='input_style fade_text text-smPlus' 
            placeholder='search here...'
           />
           <div className='show_schedule_btn'>
             <RiMenuFoldLine size={20}/>
           </div>
         </div>
      </div>
      <div className='divider_y'>
      </div>
      {/* team select section */}
       <div className='row_layout' >
          <div className='flex'>
             <div className='select_container'>
                <select name="" id="" >
                   <option value="KM TEAM">KM TEAM</option>
                   <option value="XY TEAM">XY TEAM</option>
                </select>
             </div>
             <div className='divider_x'></div>
             <div className='profiles_container row_layout'>
                 {imageCollection.map((image) => (
                   <img src={image.src} width={20} height={20} alt={image.id} key={image.id} />
                 ))}
             </div>
             <div className='divider_x'></div>
             <StyleBtn text="+ invite" theme={true} />
          </div>
          <div className='row_layout flex-wrap'>
            <div className='rounded-icon dots'>
              <BsThreeDotsVertical color='#ABA5A2' />
            </div>
            <div className='row_layout filter_icons_container'>
                {FilterIconsData.map((iconData) => (
                   <div key={iconData.id} className='rounded-icon'>
                      <img src={iconData.icon} height={20} width={20} alt={iconData.id} />
                   </div>
                ))}
            </div>
          </div>
       </div>
       <Layout />
    </section>
  )
}

export default Main