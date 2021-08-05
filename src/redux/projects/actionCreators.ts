import * as actionTypes from "./actionTypes";

export function addProject(project: IProject) {
  const action: ProjectAction = {
    type: actionTypes.ADD_PROJECT,
    project,
  };

  return simulateHttpRequest(action);
}

export function editProject(project: IProject) {
  const action: ProjectAction = {
    type: actionTypes.EDIT_PROJECT,
    project,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ProjectAction) {
  return (dispatch: ProjectDispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
