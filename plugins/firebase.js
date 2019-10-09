import firebase from 'firebase';
import 'firebase/firestore';

if (!firebase.apps.length) {
    const config = {
			apiKey: 'AIzaSyC-ZDaSHWQ63_2N6CZAL1297KgSxs_Gdfc',
			authDomain: 'kingsjw7-f7e06.firebaseapp.com',
			databaseURL: 'https://kingsjw7-f7e06.firebaseio.com',
			projectId: 'kingsjw7-f7e06',
			storageBucket: 'kingsjw7-f7e06.appspot.com',
			messagingSenderId: '349102047118',
		};
		firebase.initializeApp(config);
		// const setting = { timestampsInSnapshots: true };
		// const store = firebase.firestore();
    // store.settings(setting);
}
const fireDb = firebase.firestore();
export { fireDb };