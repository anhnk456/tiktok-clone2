/* eslint-disable react-hooks/exhaustive-deps */
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import Button from "../../Button"
import styles from "./Profle.module.scss"

const cx = classNames.bind(styles)
const Profile = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${document.URL.slice(23, )}&type=less`)
            .then(response => response.json())
            .then(json => {
                setData(...json.data);
            })
    },[document.URL])
    return(
        <div className="wrapper">
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <img className={cx('avatar')} src = {data.avatar} alt = "" />
                    <div className={cx('name')}>
                        <div className={cx('nickname')}>
                            {data.nickname}
                            {data.tick && 
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon = {faCheckCircle} />
                            </span>}
                        </div>

                        <div className={cx('fullname')}>
                            {data.full_name}
                        </div>

                        <Button className={cx('btn')}>Follow</Button>
                    </div>
                </div>

                <div className={cx('description')}>
                    <div className={cx('interaction')}>
                        <div className={cx('following')}>
                            <span>{data.followings_count}</span>
                            Đang Follow
                        </div>

                        <div className={cx('follower')}>
                            <span>{data.followers_count}</span>
                            Follower
                        </div>

                        <div className={cx('like')}>
                            <span>{data.likes_count}</span>
                            Thích
                        </div>
                    </div>

                    <div className={cx('moreinfo')}>
                        <h3 className = {cx('title')}>
                            Liên hệ với tôi
                        </h3>
                        <span>
                            For Work: 0123456789
                        </span>
                        <span>
                            Email: {data.nickname}@gmail.com
                        </span>
                        <span>
                            Facebook: fb.com/{data.nickname}
                        </span>
                    </div>
                </div>
            </div>

            <div className={cx('video')}>

            </div>
        </div>

    )
}

export default Profile