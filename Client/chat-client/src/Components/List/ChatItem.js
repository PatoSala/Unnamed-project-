

import chatPic from '../../chatPic.png';



const ChatList = ({id, name, timestamp, unreadCount, selectChat }, formatTime) => {
    

    return (
        <>
            <li key={id} className="chat-item" onClick={() => {
                    selectChat(id._serialized);
                    unreadCount = 0;
                }}>
                <div className="profile-pic">
                    <img loading="lazy" src="https://img.icons8.com/ios/50/ffffff/test-account.png" placeholderSrc={chatPic} alt="img"/>
                </div>
                <div className="chat-info">
                    <p className="chat-name">{name}</p>
                    
                    <p className="chat-last-message">{() => formatTime(timestamp)}</p>
                </div>
                <div className="chat-end">
                    {unreadCount ? <p className="unread">{unreadCount}</p> : undefined}
                    <div className="chat-options">
                        <div class="level first"></div>
                        <div class="level"></div>
                        <div class="level last"></div>
                    </div>
                </div>
            </li>
        </>
    )   
}


export default ChatList