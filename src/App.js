import React, { useState } from 'react';
import './App.css';

import moon from './Images/moon.png';
import arrow from './Images/arow.png'
import dic from './Images/dictionary.png'
import playBtn from './Images/play.png';
import search from './Images/seach.png'
// import { useEffect } from 'react';

const apiData =
  [
    {
      "word": "keyboard",
      "phonetic": "/ˈkiːbɔːd/",
      "phonetics": [
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkibɔɹd/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
          "license": {
            "name": "BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
          }
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "(etc.) A set of keys used to operate a typewriter, computer etc.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
              "synonyms": [],
              "antonyms": []
            }
          ],
          "synonyms": [
            "electronic keyboard"
          ],
          "antonyms": []
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "To type on a computer keyboard.",
              "synonyms": [],
              "antonyms": [],
              "example": "Keyboarding is the part of this job I hate the most."
            }
          ],
          "synonyms": [],
          "antonyms": []
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/keyboard"
      ]
    }
  ]
console.log(apiData)

function App() {
  const [words, setword] = useState(apiData);
  const [datas, setdatas] = useState(apiData);

  function dataFetch(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        setdatas(data);
      })
  }
  const handlechange = (event) => {
    console.log("INput Value")
    setword(event.target.value); 
  }
  console.log(datas[0].meanings[0].definitions[0].definition);

// const audio=new Audio(da)
  return (
    <div className="capitalize">

      <nav className='flex justify-between items-center  mx-6 mt-4 text-white'>
        <div className=''>
          <img width={"44px"} src={dic} alt="" />
        </div>
        <div className='flex gap-6'>
          <div className="flex gap-4 text-lg text-black">
            <div>
              <label htmlFor="dog-names"></label>
              <select className='bg-white' name="dog-names" id="dog-names">
                <option value="rigatoni">Serif</option>
                <option value="dave">Times</option>
              </select>
            </div>
          </div>
          <div>
            <img width={"32px"} src={moon} alt="" />
          </div>
        </div>
      </nav>
      <main className=" sm:mx-2 flex my-5 sm:justify-between flex-col ">
        <div className="flex justify-center">
          <div className="xl:w-96">
            <div className="input-group relative flex  items-stretch w-full mb-4">
              <input type="search" onChange={handlechange} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <button onClick={() => { dataFetch(words) }} className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='flex mx-6 justify-between items-center '>
          <span>
            <h1 className="text-4xl">{datas[0].word}</h1>
            <p className=' my-1 text-emerald-500'>sdfksd/</p>
          </span>
          <span><img className='w-10 text-green-600' src={playBtn} alt="" /></span>
        </div>
        <div className='flex mx-6 my-4 justify-center items-center'>
          <h1 className='mr-1 font-bold'>Noun </h1>
          <hr className='border-1 w-72' />
        </div>
        <div className=" mx-6">
          <label className="text-gray-400" htmlFor="meaning">Meaning</label>
          <ul className="list-disc ml-8 mt-2 text-gray-600">
            <li>{datas[0].meanings[0].definitions[0].definition}</li>
            <li>{datas[0].meanings[0].definitions[1].definition}</li>
            <li>{datas[0].meanings[0].definitions[2].definition}</li>
          </ul>
        </div>
        <div className='flex mx-6 my-4 justify-center items-center'>
          <h1 className='mr-1 font-bold'>Verb </h1>
          <hr className='border-1 w-72' />
        </div>
        <div className='mx-6'>
          <label className="text-gray-400" htmlFor="meaning">Meaning</label>
          <ul className='list-disc ml-8 mt-2 text-gray-600'>
            <li>{datas[0].meanings[1].definitions[0].definition} </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App