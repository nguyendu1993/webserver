import firebase from '../FirebaseCofig/Firebase';

const db = firebase.ref ('/Bill');

const getAll = () => {
  return db;
};

export default {
    getAll
}
