import * as actionTypes from "./actionTypes"
import projects from 'data/projects';

const initialState: ProjectsState = {
  projects,
}

const reducer = (
  state: ProjectsState = initialState,
  action: ProjectAction
): ProjectsState => {
  switch (action.type) {
    case actionTypes.ADD_PROJECT:
      const newProject: IProject = {
        id: Math.random(), // not really unique
        name: action.project.name,
        description: action.project.description,
        owner: action.project.owner
      }
      return {
        ...state,
        projects: state.projects.concat(newProject),
      }
    case actionTypes.EDIT_PROJECT:
      const newProjects = [...state.projects];
      const projectIndex: number = newProjects.findIndex(
        project => project.id === action.project.id
      );
      newProjects[projectIndex] = action.project;
      
      return {
        ...state,
        projects: newProjects,
      }
  }
  return state
}

export default reducer