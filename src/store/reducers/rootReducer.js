import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
//creates the states in the store (index.js) with keys of auth and project
//projectReducer.js creates the initial state of projects

export default rootReducer;