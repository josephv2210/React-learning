// import PropTypes from 'prop-types';

// TwitterFollowCard.propTypes ={
//     formatUserName: PropTypes.func,
//     userName: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.number
// }

// export function TwitterFollowCard ({formatUserName, userName, name, number}) {
export function TwitterFollowCard (prop) {
    const {formatUserName, userName, name, number, children} = prop
    console.log('prop::: ', prop);
    const addAt = (userName) => `@${userName}`
    //las props deben ser inmutables
    
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}