/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Video.module.scss"

import { useRef } from "react";
import ControlVideo from "../ControlVideo";
const cx = classNames.bind(styles)

const Video = ({src, index}) => {
    const refVideo = useRef()
    return (
        <div className={cx('wrapper')}>
            <video loop ref={refVideo}>
                <source src={src} type ="video/mp4" />
            </video>
            <ControlVideo refVideo = {refVideo} index = {index} />
        </div>
    )
}

export default Video