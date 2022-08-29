import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import images from "../../../images"
import { useState } from "react"
const cx = classNames.bind(styles)
const AccountItem = ({data}) => {

const [errImg, setErrImg] = useState('')
    return (
        <Link className = {cx('wrapper')} to ={`/@${data.nickname}`}>
            <img className={cx('avatar')} alt='' src = {errImg || data.avatar} onError={() => setErrImg(images.errImg)} />
            <div className = {cx('infor')}>
                <p className = {cx('nickname')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    )
}

export default AccountItem