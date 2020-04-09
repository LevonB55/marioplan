const initState = {
  projects: [
    {id: '1', title: 'Help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'Collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'Egg hunt with yoshi', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('Created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Project error', action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer;