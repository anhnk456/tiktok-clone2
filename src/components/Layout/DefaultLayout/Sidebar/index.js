import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu from '../../components/Menu'
import MenuItem from '../../components/Menu/MenuItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'
import LoginSidebar from './LoginSidebar'
import SuggestedAccounts from '../../components/SuggestedAccounts'
import Discover from '../../components/Discover'
import FooterSidebar from './FooterSidebar'
import { publicRoutes } from '../../../../routes'


const cx = classNames.bind(styles)

const Sidebar = ({className, classNameDiscover, classNameContent, classNameTippy}) => {
    const classes = cx('wrapper', {
        [className] : className,
    })

    return (
        <div className = {classes}>
            <Menu>
                <MenuItem icon = {<FontAwesomeIcon icon={faHome} />} title = "Dành cho bạn" to = {`${publicRoutes[0].path}`}  />
                <MenuItem icon = {<FontAwesomeIcon icon={faUser} />} title = "Đang Follow" to = "/following" /> 
                <MenuItem icon = {<FontAwesomeIcon icon={faVideo} />} title = "LIVE" to = "/live"  />
            </Menu>

            <LoginSidebar />

            <SuggestedAccounts className = {classNameTippy} />

            <Discover className={classNameDiscover} classNameContent = {classNameContent} />

            <FooterSidebar />

        </div>
    )
}

export default Sidebar