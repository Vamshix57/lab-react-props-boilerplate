import './App.css';
import React from "react";
import elephant from "./images/elephant.jpeg";
import { imageData } from './components/DataComponent';


function App(props) {
  let image_arr= props.imageData()
  return (
    <>
      <h1>Kalvium Gallery</h1>
      {/* <div className='parent_div'>
          <img src={image_arr[0].img} alt="" className='image' />
          <img src={image_arr[1].img} alt=""  className='image'/>    
          <img src={image_arr[0].img} alt="" className='image' />
          <img src={image_arr[1].img} alt=""  className='image'/>    
      </div> */}
      <div className='parent_div'>
          {
            image_arr.map(elem =>{
              return (
                <img src={elem.img} alt='element' className='image'/>
              )
            })
          }    
      </div>
    </>
  )
}

export default App;
