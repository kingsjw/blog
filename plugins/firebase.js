import firebase from 'firebase';
import 'firebase/firestore';

if (!firebase.apps.length) {
    const config = {
			apiKey: '',
			authDomain: 'kingsjw7-f7e06.firebaseapp.com',
			databaseURL: '',
			projectId: '',
			storageBucket: '',
			messagingSenderId: '',
		};
		firebase.initializeApp(config);
}
const fireDb = firebase.firestore();
export { fireDb };
