import chatStyle from '../../styles/css/Chat.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import App from './App'
const Chat = () => {
	return (
		
		<div>
			<ul className='pages'>
				<li className='chat page'>
					<div className='chatArea'>
						<ul className='messages'></ul>
					</div>
					<div className={chatStyle.inputArea}>
						<input className={chatStyle.input} placeholder='Type here...' />
						<FontAwesomeIcon
							className={chatStyle.icon}
							icon={faPaperPlane}
						></FontAwesomeIcon>
					</div>
				</li>
			</ul>
		</div>
	)
}
export default Chat
