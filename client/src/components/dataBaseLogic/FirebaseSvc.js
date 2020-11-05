import firebase from 'firebase';

const configKey = require('../config/dev');

const config = {
  apiKey: configKey.apiKey,
  authDomain: configKey.authDomain,
  databaseURL: configKey.databaseURL,
  projectId: configKey.projectId,
  storageBucket: configKey.storageBucket,
  messagingSenderId: configKey.messagingSenderId
}

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      //console.log("firebase apps already running...")
    }
  }

  get ref() {
    return firebase.database().ref('Messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: id } = snapshot;
    const { key: _id } = snapshot; //needed for giftedchat
    const timestamp = new Date(numberStamp);

    const message = {
      id,
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        createdAt: new Date(), //this.timestamp,
      };
      this.ref.push(message);
    }
  };

  refOff() {
    this.ref.off();
  }
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;