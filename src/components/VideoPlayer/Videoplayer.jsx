import React, { useRef } from 'react'
import './Videoplayer.css'
import Campus_video from '../../assets/Campus_video.mp4'
const Videoplayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState? '':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={Campus_video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer