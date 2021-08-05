import * as actionTypes from "./actionTypes"

export function addProject(project: IProject) {
  const action: ProjectAction = {
    type: actionTypes.ADD_PROJECT,
    project,
  }

  // return action;
  return simulateHttpRequest(action)
}

// export function addProject2(project: IProject) {
//   return (dispatch: ProjectDispatchType) => {
//     setTimeout(() => {
//       dispatch(addProject(project))
//     }, 500)
//   }
// }

export function editProject(project: IProject) {
  const action: ProjectAction = {
    type: actionTypes.EDIT_PROJECT,
    project,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ProjectAction) {
  return (dispatch: ProjectDispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}