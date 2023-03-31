import React from "react";
import { useState } from "react";
import dic from '../Images/dictionary.png'
import moon from '../Images/moon.png';
function Navbar(){

    function textColor(){
        if (theme === "#fff") {
          return "#000000"
        }
        else{
          return "#fff"
        }
      }
      function navColor(){
        return "#fff"
      }
      const [theme, setTheme] = useState("#fff");
      const [fontFamilys, setfontFamily] = useState("sans");
    return(
        <nav className=' lg:justify-around lg:mx-32 flex justify-between items-center  mx-6 pt-4 '>
        <div>
          <img width={"44px"} className="rounded" style={{background:`${navColor()}`}} src={dic} alt="" />
        </div>
        <div className='flex gap-6'>
          <div className="flex gap-4 text-lg text-black">
            <div>
              <label htmlFor="dog-names"></label>
              <select onChange={(event)=>{setfontFamily(event.target.value)}} style={{background:`${theme}`,color:`${textColor()}`}} name="dog-names" id="dog-names">
                <option value="serif">Serif</option>
                <option value="cursive">cursive</option>
                <option value="fantasy">fantasy</option>
              </select>
            </div>
          </div>
          <div>
            <img width={"32px"} 
            style={{background:`${navColor()}`}}
            onClick={() => {
              if (theme === "#fff") {
                setTheme("#000000");
              } else {
                setTheme("#fff");
    
              }
            }}
            className="rounded-full border-2 border-white"
            src={moon} alt="" />
          </div>
        </div>
      </nav>
    )
}
export default Navbar