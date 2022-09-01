import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";
import { useRef } from "react";
const cx = classNames.bind(styles); 

const DefaultLayout = ({children}) => {
    const refDiv = useRef()
    return (
        <div ref={refDiv} className = {cx('wrapper',{'overlay':false})}>
            <Header href={refDiv} /> 
            <div className={cx("container")}>
                <Sidebar className={cx("sidebar")} />
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout