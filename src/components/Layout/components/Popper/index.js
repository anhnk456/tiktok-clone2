import classNames from "classnames/bind"
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

const Popper = ({children, className}) => {
    const classes = cx('wrapper', {
        [className] : className,
    })
    
    return (
        <div className = {classes}>
            {children}
        </div>
    )
}
 
export {Popper}