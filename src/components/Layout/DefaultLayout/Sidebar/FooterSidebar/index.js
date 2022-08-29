/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import styles from "./FooterSidebar.module.scss"

const cx = classNames.bind(styles)

const FooterSidebar = () => {
    return (
        <div className = {cx('wrapper')}>
            <div className={cx('content')}>
                <a href="#"> Giới thiệu</a>
                <a href="#"> TikTok Browse</a>
                <a href="#"> Bảng tin</a>
                <a href="#"> Liên hệ</a>
                <a href="#"> Sự nghiệp</a>
                <a href="#"> ByteDance</a>
            </div>

            <div className={cx('content')}>
                <a href="#"> TikTok for Good</a>
                <a href="#"> Quảng cáo</a>
                <a href="#"> Developers</a>
                <a href="#"> Transparency</a>
                <a href="#"> TikTok Rewards</a>
            </div>

            <div className={cx('content')}>
                <a href="#"> Trợ giúp</a>
                <a href="#"> An toàn</a>
                <a href="#"> Điều khoản</a>
                <a href="#"> Quyền riêng tư</a>
                <a href="#"> Creator Portal</a>
                <a href="#"> Hướng dẫn cộng dồng</a>
            </div>

            <p> Thêm </p>

            <p> © 2022 TikTok </p>
        </div>
    )
}

export default FooterSidebar