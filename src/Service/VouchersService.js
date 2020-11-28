import firebase from "../FirebaseCofig/Firebase";

const db = firebase.ref("/Vouchers");

const getAll = () => {
    return db;
}

const getAllFollowStatus = (status) => {
    return db.orderByChild('status').equalTo(status);
}

const getAllFollowCode = (code) => {
    return db.orderByChild('code').equalTo(code);
}

const createVouchers = () => {
    return db.push();
}

const create = (data) => {
    return db.push(data);
}

const update = (key, data) => {
    return db.child(key).update(data);
}

const remove = (key) => {
    return db.child(key).update({ status: 1 });
}

// const remove = (key) => {
//     return db.child(key).remove();
// }

export default {
    getAll,
    create,
    update,
    remove,
    getAllFollowStatus,
    getAllFollowCode,
    createVouchers,
    
}