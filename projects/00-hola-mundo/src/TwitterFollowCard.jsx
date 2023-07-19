export function TwitterFollowCard ({formatUserName, userName, name, isFollowing, number}) {
    const addAt = (userName) => `@${userName}`
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="Avatar" 
                src={`https://randomuser.me/api/portraits/men/${number}.jpg`}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}