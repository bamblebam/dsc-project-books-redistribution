import firebase from 'firebase/app'
import 'firebase/auth'
const abc = () => {
	var user = firebase.auth().currentUser
	const temp = () => {
		if (user) {
			return (
				<div>
					<h1>{user}</h1>
				</div>
			)
		} else {
			return <div>No one</div>
		}
	}
	return temp()
}

export default abc
