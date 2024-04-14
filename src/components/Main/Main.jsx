import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { useContext } from 'react'

const main = () => {

  const {onSent, recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini </p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

          {!showResult
          ?<>
              <div className="greet">
            <p><span>Hello, Aarya.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Explain how something works like an engineer</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Find YouTube videos with inspiring best man speeches</p>
              <img src={assets.youtube_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm ways to make a dish more delicious</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Help me incorporate more plant-based options in my diet</p>
              <img src={assets.compass_icon} alt="" />
            </div>
          </div>
          </>
          :<div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                  
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
              </div>

          </div>
          }
          

          <div className="main-bottom">
            <div className="searchbox">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon}  alt="" />
                <img src={assets.mic_icon}  alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon}  alt="" />
              </div>
            </div>
            <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
          </div>
        </div>
        
    </div>
  )
}

export default main