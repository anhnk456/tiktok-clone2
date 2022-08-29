import classNames from "classnames/bind"
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)

const Menu = ({children}) => {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )

}

export default Menu