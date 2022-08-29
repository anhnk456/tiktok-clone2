import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(styles); 

const DefaultLayout = ({children}) => {
    return (
        <div className = {cx('wrapper')}>
            <Header /> 
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