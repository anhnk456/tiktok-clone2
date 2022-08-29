import classNames from "classnames/bind"
import styles from "./PopperMenuOptions.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft, } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)
const Header = ({onClick}) => {
    return (
        <div className={cx('header')}>
                <button onClick={onClick} className={cx("button")}><FontAwesomeIcon className={cx('icon')} icon = {faAngleLeft} /> </button>
                <span className={cx('content')}>Ngôn ngữ</span>
         </div>
    )
}
export default Header