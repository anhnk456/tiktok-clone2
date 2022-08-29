import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import {faCircleXmark, faSpinner, faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Popper as PopperWrapper } from '../Layout/components/Popper';
import AccountItem from '../Layout/components/AccountItem'
import classNames from 'classnames/bind';
import styles from './Input.module.scss'
import { useRef } from 'react';

const cx = classNames.bind(styles)
const Input = () => {
    const inputRef = useRef()
    const divRef = useRef()
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [bluf, setBluf] = useState(true)
    const [loading, setLoading] = useState(false)
    const [debounced, setDebounced] = useState(searchValue)
    useEffect(() => {
       const handler = setTimeout(() => {
            setDebounced(searchValue)
        }, 500)
        return () => clearTimeout(handler)
    } ,[searchValue])
    useEffect(() => {
       if (debounced)
        {
            setLoading(true)
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(response => response.json())
            .then(json => {
                setSearchResult(json.data);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
        }   
       else {
            return 
       }
    }, [debounced])

    const handleClickBtn = (e) => {
        divRef.current.style.borderColor = 'transparent'
        // e.preventDefault()

    }

    const handleChange = (e) => {
        const searchInput = e.target.value
        if(!searchInput.startsWith(' '))
            {
                setSearchValue(searchInput)
            }
    }

    return (
        <div>
            <Tippy 
                    interactive
                    visible = {searchValue.length > 0 && bluf}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className = {cx('sreach-title')}>Tài khoản</h4>
                                {searchResult.map((data) => <AccountItem key={data.id} data={data} />)}
                            </PopperWrapper>
                        </div>
                      )}
                    onClickOutside = {() => {
                        setBluf(false);
                    }}
                    
                >
                    <div ref = {divRef} className={cx('search')}>
                        <input 
                            ref={inputRef}
                            value = {searchValue}
                            placeholder = "Tìm kiếm tài khoản và video"  
                            onChange={handleChange}
                            onFocus = {() => {
                                setBluf(true);
                                divRef.current.style.borderColor = '#cacacd'
                                
                            }}
                            onBlur = {() => {
                                 divRef.current.style.borderColor = 'transparent'
                            }}
                            
                        />
                        {searchValue.length > 0 && !loading &&(

                        <button onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus()
                            }} 
                            className={cx('btn')}>
                                <FontAwesomeIcon  className={cx('icon-delete')} icon = {faCircleXmark} />
                        </button>

                        )}
                        {loading && <FontAwesomeIcon spin className={cx('icon-loading')} icon = {faSpinner} />}
                        <button onClick = {handleClickBtn} className = {cx('btn-search')}>
                            <FontAwesomeIcon icon = {faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
        </div>
    )
}

export default Input