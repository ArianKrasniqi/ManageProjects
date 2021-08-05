interface IProject {
  id: number
  name: string
  description: string,
  owner: string
}

type ProjectsState = {
  projects: IProject[]
}

type ProjectAction = {
  type: string
  project: IProject
}

type ProjectDispatchType = (args: ProjectAction) => ProjectAction
