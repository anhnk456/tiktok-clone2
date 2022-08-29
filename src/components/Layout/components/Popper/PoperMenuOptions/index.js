import classNames from "classnames/bind"
import styles from "./PopperMenuOptions.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless';
import {Popper as PopperWrapper} from '../../Popper'
import {  faCircleQuestion, faEarthAsia, faKeyboard, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../../Button"
import { useState } from "react"
import Header from "./Header"
const cx = classNames.bind(styles)
const PopperMenuOptions = () => {
    const MENU_OPTIONS = [
        {
            icon: <FontAwesomeIcon icon = {faEarthAsia} />,
            content: 'Tiếng Việt',
            children: [
                {
                    type: 'language',
                    content:'Tiếng Việt',
                    sign: 'VN'
                },
                {
                    type: 'language',
                    content:'Tiếng Anh',
                    sign: 'EN'
                },
                
                
            ]
        },
        {
            icon: <FontAwesomeIcon icon = {faCircleQuestion} />,
            content: 'Phản hồi và trợ giúp',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon = {faKeyboard} />,
            content: 'Phím tắt trên bàn phím'
        }
    ]
    const [history, Sethistory] = useState([{data: MENU_OPTIONS}])
    const current = history[history.length - 1]
    return (
            <Tippy 
        interactive
        placement='bottom-end'
        onHide={() => {
            Sethistory(prev => prev.slice(0, 1))
        }}
        render={attrs => (
            <div className={cx('menu-help')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('wrapper')}>
                    {history.length > 1 && <Header title={current.title} onClick={() => {
                        Sethistory(prev => prev.slice(0, prev.length - 1))
                    }} />}
                <div className={cx('wrapper-options')}>
                    {current.data.map((option, index) => {
                        const isParent = !!option.children
        
                        return (
                            <Button key={index} to = {option.to} className={cx('button')} onClick = {() =>{
                                if(isParent) {
                                    Sethistory(prev => [...prev,{data: option.children}])
                                }
                            }}>
                                <div className={cx('menu-option')}>
                                    <span className={cx('icon')}>{option.icon}</span>
                                    <span>{option.content}</span>
                                </div>                  
                            </Button>
                        )
                        })}
                </div>
                </PopperWrapper>
            </div>
          )}
                >
                <span className = {cx('icon-help')}>
                    <FontAwesomeIcon icon = {faEllipsisVertical} />
                </span>
        </Tippy>
    )
}

export default PopperMenuOptions