import chatStyle from '../../styles/css/Chat.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {
	return (
		<div>
			<ul class='pages'>
				<li class='chat page'>
					<div class='chatArea'>
						<ul class='messages'></ul>
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
