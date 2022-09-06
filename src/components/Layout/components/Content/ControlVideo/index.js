/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./ControlVideo.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles)

const ControlVideo = ({refVideo, index}) => {
    const[play, setPlay] = useState(true)

    const handlePlayVideo = () => {
        refVideo.current.play()
        setPlay(false)
    }



    return (
        <div className={cx('wrapper')}>
            {play && 
            <span onClick={ () => {
                handlePlayVideo()
                }
            } className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
            </span>}
                            
            {!play && 
            <span onClick={() => {
                refVideo.current.pause()
                setPlay(true)
            }} className={cx('pause')}>
                <FontAwesomeIcon icon={faPause}/>
            </span>
            }

            <div className={cx('speaker')}>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </span>
                <div className={cx('volume')}>
                <input onChange={(e) => {
                    refVideo.current.volume = e.target.value/100
                    }
                    } type="range" min="0" max="100" step ="1" orient = "vertical"/>
                
                </div>
            </div>
        </div>
    )
}

export default ControlVideo