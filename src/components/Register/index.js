import classNames from "classnames/bind"
import styles from'./Register.module.scss'
import Tippy from '@tippyjs/react/headless';
import { Popper as PopperWrapper } from "../Layout/components/Popper";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faQrcode, faUser, faWalkieTalkie, faXmark } from "@fortawesome/free-solid-svg-icons";
import {faApple, faFacebook, faGoogle, faInstagram, faLine, faTwitch} from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import Button from "../Button";

const cx = classNames.bind(styles);

const registerLoginForm = [

    {
        title: 'Đăng nhập vào TikTok',
        format : [
                {
                    icon: <FontAwesomeIcon icon={faQrcode} />,
                    content: 'Sử dụng mã QR'
                },
                {
                    icon: <FontAwesomeIcon icon={faUser} />,
                    content: 'Số điện thoại / Email / TikTok ID'
                },
                {
                    icon: <FontAwesomeIcon icon={faFacebook} />,
                    content: 'Tiếp tục với Facebook'
                },
                {
                    icon: <FontAwesomeIcon icon={faGoogle} />,
                    content: 'Tiếp tục với Google'
                },
                {
                    icon: <FontAwesomeIcon icon={faTwitch} />,
                    content: 'Tiếp tục với Twitter'
                },
                {
                    icon: <FontAwesomeIcon icon={faLine} />,
                    content: 'Tiếp tục với LINE'
                },
                {
                    icon: <FontAwesomeIcon icon={faWalkieTalkie} />,
                    content: 'Tiếp tục với KakaoTalk'
                },
                {
                    icon: <FontAwesomeIcon icon={faApple} />,
                    content: 'Tiếp tục với Apple'
                },
                {
                    icon: <FontAwesomeIcon icon={faInstagram} />,
                    content: 'Tiếp tục với Instagram'
                },
                
        ]
    },

    {
        title: 'Đăng ký TikTok',
        format : [
                {
                    icon: <FontAwesomeIcon icon={faUser} />,
                    content: 'Số điện thoại / Email / TikTok ID'
                },
                {
                    icon: <FontAwesomeIcon icon={faFacebook} />,
                    content: 'Tiếp tục với Facebook'
                },
                {
                    icon: <FontAwesomeIcon icon={faGoogle} />,
                    content: 'Tiếp tục với Google'
                },
                
        ]
    }

]

const Register = ({className, children}) => {
    const [form, setForm] = useState([registerLoginForm[0]])
    const current = form[form.length -1]
    const classes = cx('wrapper', {
        [className] : className,
    })
    return (
        <div>
            <PopperWrapper className={classes}>
                {children}
                <div className={cx('inner')}>
                    <h2 className={cx('header')}>{current.title}</h2>
                    {
                        current.format.map((index, value) => (
                            <Button className={cx('button')} key={value} >
                                <span className={cx('icon')}>{index.icon}</span>
                                <span className={cx('content')}>{index.content}</span>
                            </Button>
                        ))

                    }
                </div>
                    {
                        current.title.startsWith('Đăng nhập vào TikTok') && (
                            <div className={cx('footer')}>
                                <span>
                                    Bạn không có tài khoản?
                                </span>
                                <button className={cx('btn-transfrom')} onClick={() => setForm([registerLoginForm[1]])}>
                                    Đăng ký
                                </button>
                            </div>
                        )
                    }
                    {
                        current.title.startsWith('Đăng ký TikTok') && (

                            <>
                                <span className={cx('icon-down')}><FontAwesomeIcon icon={faAngleDown} /></span>
                                <div className={cx('policy')}>
                                    <p className="tiktok-wtdya7-PText e1sbfgbz1">Bằng cách tiếp tục, bạn đồng ý với  
                                    <span>
                                    Điều khoản Sử dụng
                                    </span> 
                                        của TikTok và xác nhận rằng bạn đã đọc hiểu  
                                    <span>
                                        Chính sách Quyền riêng tư
                                    </span> của TikTok.
                                    </p>    
                                </div>
                                <div className={cx('footer')}>
                                    <span>
                                        Bạn đã có tài khoản?
                                    </span>
                                    <button className={cx('btn-transfrom')} onClick={() => setForm([registerLoginForm[0]])}>
                                        Đăng nhập
                                    </button>
                                </div>
                            </>
                        )
                    }
            </PopperWrapper>
        </div>
    )
}

export default Register