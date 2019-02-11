import firebase from 'firebase';

const auth = {
  register: (userData) => {
    return firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(userData.email, userData.password);
  },
};

export default auth;
