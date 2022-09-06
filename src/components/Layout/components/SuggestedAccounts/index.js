import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "./SuggestedAccounts.module.scss"
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles)


const SuggestedAccounts = ({className}) => {

    const [account, setAccount] = useState([])
    const [seeAll, setSeeAll] = useState(false)

    const classes = cx('typpybox', {
        [className] : className
    })

    useEffect(() => {
        if(seeAll) {
            fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=16')
                .then(response => response.json())
                .then(json => setAccount(json.data))
        }

        else {
            fetch('https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=5')
            .then(response => response.json())
            .then(json => setAccount(json.data))
        }

        return 
    },
    [seeAll])

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>
                Tài khoản được đề xuất
            </p>
            {account.map((account, index) => (
                 <div key={index}>
                     <Tippy
                        interactive
                        delay = {[800, 0]}
                        placement = "bottom"
                        render={() => (
                        <div className={classes} >
                            <div className={cx('header')}> 
                                <img className={cx('img')} src = {account.avatar} alt = "" />
                                <button className={cx('btn')}>Follow</button>
                            </div>
    
                            <div className={cx('name')}>
                                <span className={cx('nickname')}>
                                    {account.nickname}
                                    {account.tick && 
                                        <span className= {cx('icon')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    }
                                </span>
                                <span className={cx('fullname')}>
                                    {account.first_name} {account.last_name}
                                </span>
                            </div>
    
                            <div className={cx('likeandfollow')}>
                                <span className={cx('follower')}>
                                    {account.followers_count}
                                    <span> Follower </span>
                                </span>
                                <span className={cx('like')}>
                                    {account.likes_count}
                                    <span> Thích </span>
                                </span>
                            </div>
                        </div>
                        )}
                    >
                        <Link className={cx('account')} to = {`/@${account.nickname}`}>
                            <img className={cx('img')} alt="" 
                                src = {account.avatar} />
                            
                            <div className= {cx('name')}>
                                <span className={cx('nickname')}>
                                    {account.nickname}
                                    {account.tick && 
                                        <span className= {cx('icon')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    }
                                </span>
                                <span className={cx('fullname')}>
                                    {account.first_name} {account.last_name}
                                </span>
            
                            </div>
                        </Link>
                    </Tippy>
                    
                 </div>

                
            ))}

            {!seeAll && <div onClick={() => setSeeAll(true)} className={cx('seeall')}>
                Xem tất cả
            </div>}
            {seeAll && <div onClick={() => setSeeAll(false)} className={cx('seeall')}>
                Ẩn bớt
            </div>}
        </div>
    )
}

export default SuggestedAccounts