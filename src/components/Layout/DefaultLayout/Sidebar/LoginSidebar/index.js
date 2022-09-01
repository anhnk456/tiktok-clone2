import classNames from "classnames/bind";
import { useState } from "react";
import Button from "../../../../Button";
import Header from "../../../components/Header";
import styles from "./LoginSidebar.module.scss"

const cx = classNames.bind(styles)

const LoginSidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>
                Đăng nhập để follow các tác giả, 
                thích video và xem bình luận.
            </p>

            <Button className={cx('btn')}> Đăng nhập </Button>

            
        </div>

    )
}

export default LoginSidebar