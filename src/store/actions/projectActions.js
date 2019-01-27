export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to db
        const firestore = getFirestore();//ref to firestore db
        firestore.collection("projects").add({
            ...project,
            authorFirstName: "Michael",
            authorLastName: "Jackson",
            authorId: 5293,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project: project});
        }).catch((err) => {
            dispatch({type: "CREATE_PROJECT_ERROR", err});
        });
        
    }
};