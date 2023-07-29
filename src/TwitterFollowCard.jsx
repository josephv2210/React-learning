// import PropTypes from 'prop-types';

// TwitterFollowCard.propTypes ={
//     formatUserName: PropTypes.func,
//     userName: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.number
// }

// export function TwitterFollowCard ({formatUserName, userName, name, number}) {

import { useState } from "react";

export function TwitterFollowCard (prop) {
    
    
    const {formatUserName, userName='unknown', name, number, children, initialIsFollowing} = prop
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    console.log('prop::: ', prop);
    const addAt = (userName) => `@${userName}`
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    //las props deben ser inmutables

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="Avatar" 
                src={`https://randomuser.me/api/portraits/men/${number}.jpg`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">
                    {text}
                        </span>

                    <span className="tw-followCard-stopFollow">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}