import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps =useMultiChatLogic('a54de560-3c0f-4ba2-916b-c9c904526f5d',
    props.user.username,
    props.user.secret
    )
    return (
        <div style={{height:"100vh"}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
       );
    }

export default ChatsPage;