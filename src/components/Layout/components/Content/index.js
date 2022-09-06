import { faCheckCircle, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button";
import styles from "./Content.module.scss";
import Video from "./Video";

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
        
        },10000)

        return () => clearTimeout(handler)
        
    },[pagination])

    return (
            <div className={cx('wrapper')}>
                {content.map((data, index) => {

                    return (
                    <div className={cx('video')} key={index}>
                        <div className={cx('account')}>
                            <Link to={`/@${data.user.nickname}`}>
                                <img className={cx('avatar')} alt="" src={data.user.avatar} />
                            </Link>

        
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
                            <Video src = {data.file_url} index = {index} />
                            
                            <div className={cx('interaction')}> 
                                <button> 
                                    <span>
                                        <FontAwesomeIcon icon = {faShare} /> 
                                    </span>
                                        <p>{data.shares_count}</p>
                                </button>
                                <button> 
                                    <span>
                                        <FontAwesomeIcon icon = {faCommentDots} /> 
                                    </span>
                                        <p>{data.comments_count}</p>
                                </button>
                                <button> 
                                    <span>
                                        <FontAwesomeIcon icon = {faHeart} />
                                    </span> 
                                        <p>{data.likes_count}</p>
                                </button>
                            </div>
                            
                        </div>                    
                    </div>
                )})}
            </div>
    )
}

export default Content