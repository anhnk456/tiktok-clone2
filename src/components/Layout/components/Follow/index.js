import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../../Button";
import styles from "./Follow.module.scss";

const cx = classNames.bind(styles);

const Follow = () => {
    const [followerData, setFollowerData] = useState([])
    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=2&per_page=15')
                .then(response => response.json())
                .then(json => setFollowerData(json.data))
    },[])
    return (
        <div className={cx(('wrapper'))}>
            {followerData.map((data, index) => (
                <div className = {cx('follower')} key={index}>
                    <img className={cx('img')} src = {data.popular_video.thumb_url} alt = "" />
                    <div className={cx('info')}>
                        <img className={cx('avatar')} src = {data.avatar} alt = "" />
                        <div className={cx('name')}>

                            <span className = {cx('fullname')}>
                                {data.first_name} {data.last_name}
                            </span>
                            <span className = {cx('nickname')}>
                                {data.nickname}
                            </span>
                            
                        </div>
                        <Button className={cx('btn')}> Follow </Button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Follow