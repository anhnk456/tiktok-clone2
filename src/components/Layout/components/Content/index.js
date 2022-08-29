import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../../Button";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles)

const Content = () => {

    const[content, setContent] = useState([])
    const[pagination, setPagination] = useState(1)

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=${pagination}`)
            .then(response => response.json())
            .then(json => setContent(prev => [...prev, ...json.data]))
    },[pagination])

    useEffect( () => {
        const handler = setTimeout(() => {
            if(pagination <= 3)
                {
                    setPagination(prev => prev + 1)
                }
        
        },2000)

        return () => clearTimeout(handler)
        
    },[pagination])

    return (
            <div className={cx('wrapper')}>
                {content.map((data, index) => {

                    return (
                    <div className={cx('video')} key={index}>
                        <div className={cx('account')}>
                            <img className={cx('avatar')} alt="" src={data.user.avatar} />
        
                            <div className={cx('info')}>
                                <div className={cx('name')}>
                                    <span className={cx('nick-name')}>
                                        {data.user.nickname}
                                        {data.user.tick && 
                                            <span>
                                                <FontAwesomeIcon icon = {faCheckCircle} />
                                            </span>
                                        }
                                    </span>
                                    <p>{data.user.first_name} {data.user.last_name}</p>
                                </div>
            
                                <span className={cx('description')}>
                                    {data.description}
                                </span>
                            </div>
        
                        <div className={cx('follow')}>
                            <Button className={cx('btn')}>Follow</Button>
                        </div>
                    </div>
        
                    <div className = {cx('content')}>
                        <video controls >
                                <source src={data.file_url} type ="video/mp4" />
                        </video>
                    </div>
                    </div>
                )})}
            </div>
    )
}

export default Content