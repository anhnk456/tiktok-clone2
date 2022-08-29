import classNames from "classnames/bind"
import styles from './Button.module.scss'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

const Button = ({to, href, onClick, children, primary,className, upload, ...passProps}) => {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        [className] : className,
        upload
    })
    return (
        <Comp className={classes} {...props}>
            <span>
                {children}
            </span>
        </Comp>
    )
}

export default Button