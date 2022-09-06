import { faHashtag, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "../../../Button";
import styles from "./Discover.module.scss";

const cx = classNames.bind(styles);

const data = [
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        title: 'suthatla'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        title: 'mackedoi'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        title: 'sansangthaydoi'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        title: 'Yêu Đơn Phương Là Gì(MEE REMIX)'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        title: 'Thiên Thần Tình Yêu - RICSTAR'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        title: '7749hieuung'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag} />,
        title: 'genzlife'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        title: 'Thằng Hầu (Thái Hoàng Remix)'
    },
]



const Discover = ({className, classNameContent}) => {

    const classes = cx('btn', {
        [className]: className
    })

    const classcontent = cx('content', {
        [classNameContent]: classNameContent
    })

    return (
        <div className = {cx('wrapper')}>
            <p className = {cx('title')}> Khám phá </p>
           <div className = {cx('discover')}>
                {data.map((value, index) => (
                    <div key={index}>
                        <Button className={classes}>
                            <div className={cx('icon')}>
                                {value.icon}
                            </div>  
                            <div className={classcontent}>
                                {value.title}
                            </div> 
                        </Button>
                    </div>
                ))}
           </div>
        </div>
    )
}

export default Discover
