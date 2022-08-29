import classNames from "classnames/bind";
import styles from './MenuItem.module.scss'
import {NavLink} from 'react-router-dom'
const cx = classNames.bind(styles)

const MenuItem = ({title, icon, to}) => {
    return (
        <NavLink to = {to} className={(nav) => cx('menu-item', {active: nav.isActive}) }>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}

export default MenuItem