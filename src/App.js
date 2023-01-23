import React,{useState} from 'react';
import './App.css';

import moon from './Images/moon.png';
import arrow from './Images/arow.png'
import dic from './Images/dictionary.png'
import search from './Images/seach.png'
import { useEffect } from 'react';

function dataFetch(word){
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response=>response.json())
  .then(data=>{
    console.table(data)
  })
}


function App() {
  const [word, setword] = useState('Keyboard');
  // useEffect(() => {
  //   dataFetch();
  // })
  const handlechange=(event)=>{
    console.log("INput Value")
    setword(event.target.value);
  }
  
  return (
    <div className="capitalize">
      <nav className='flex justify-around align-middle bg-violet-500 text-white'>
        <div>
          <img width={"24px"} src={dic} alt="" />
        </div>
        <div className='flex gap-20'>
          <div className="flex">
            <span>Serif</span>
            <span><img width={"24px"} src={arrow} alt="" /></span>
          </div>
          <div className="flex justify-center">
            <div className="form-check form-switch">
              <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
          </div>
          <div>
            <img width={"24px"} src={moon} alt="" />
          </div>
        </div>
      </nav>
      <main className=" flex justify-center flex-col items-center">
        <div className='flex'>
          <input onChange={handlechange} className='border-2' type="text" />
          <img onClick={()=>{dataFetch(word);}} width={"24px"} src={search} alt="" />
        </div>
        <div>
          <span>
            <h1>{word.word}</h1>
            <p>/sdfsd</p>
          </span>
          <span><audio >autido</audio></span>
        </div>
        <h1>Noun</h1>
       <hr />
        <div className="w-1/2">
          <ul className="list-disc">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut voluptatem ut mollitia sapiente nam commodi quas ullam possimus totam?</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, qui. Recusandae modi inventore assumenda libero! Dolore neque porro obcaecati ratione?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex molestias excepturi dolorum, aliquid voluptatibus quasi! Officiis quo dolorum cum.</li>
          </ul>
        </div>
        <h1>verb</h1>
        <div>
          <label htmlFor="">Meaning</label>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, assumenda?
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App