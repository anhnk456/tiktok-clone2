import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import styles from "./SuggestedAccounts.module.scss"

const cx = classNames.bind(styles)


const SuggestedAccounts = () => {

    const [account, setAccount] = useState([])
    const [seeAll, setSeeAll] = useState(false)


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
            {account.map((account) => (
                 <div key={account.id} className={cx('account')}>
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