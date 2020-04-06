import { firebase, googleAuthProvider } from '../firebase/firebase';
import fbAuthProvider from '../firebase/firebase';

export const startLoginWithGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(fbAuthProvider);
    };
};

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});