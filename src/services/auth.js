import firebase from 'firebase';

const auth = {
  register: userData => firebase
    .auth()
    .createUserAndRetrieveDataWithEmailAndPassword(userData.email, userData.password),
};

export default auth;
