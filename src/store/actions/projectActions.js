import { firestore } from '../../config/firebase';

export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call to database
    firestore.collection('projects').add({
      ...project,
      authorFirstName: "Jack",
      authorLastName: "Owen",
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project});
    }).catch(error => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error: error});
    });
  }
};