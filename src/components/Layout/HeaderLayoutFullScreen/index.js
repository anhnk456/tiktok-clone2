import classNames from "classnames/bind";
import styles from "./HeaderLayoutFullScreen.module.scss"
import Header from "../components/Header"
import Sidebar from "../DefaultLayout/Sidebar";
const cx = classNames.bind(styles)

const HeaderLayoutFullScreen = ({children}) => {
    return (
        <div className={cx('wrapper')}>
            <Header className = {cx('fullscreen')} />
            <div className={cx('inner')}>
                <Sidebar className = {cx('smallsidebar')} classNameDiscover = {cx('discoversmall')} classNameContent = {cx('smallcontent')} classNameTippy = {cx('tippyboxsmall')} />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderLayoutFullScreen