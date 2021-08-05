import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useSelector, shallowEqual } from "react-redux"
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { editProject } from "redux/projects/actionCreators";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: '50vw',
  }
}))

const Edit = ({match}: any) => {
  const classes = useStyles();
  const id = match.params.id;
  const [project, setProject] = useState({
    id: 1,
    name: "",
    description: "",
    owner: ""
  });

  const history = useHistory();

  const dispatch: Dispatch<any> = useDispatch()

  const projects: readonly IProject[] = useSelector(
    (state: ProjectsState | any) => state.projects.projects,
    shallowEqual
  )

  const users: readonly IUser[] = useSelector(
    (state: UsersState | any) => state.users.users,
    shallowEqual
  )
  
  useEffect(() => {
    const findProject: IProject | undefined = projects.find((project) => project.id == id);
    if(findProject)
      setProject(findProject);
  }, [])

  const saveProject = useCallback(
    (project: IProject) => dispatch(editProject(project)),
    [dispatch]
  )

  const handleSubmit = () => {
    saveProject(project);
    history.push('/');
  };

  const handleOnChangeProject = (e: any): void => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog handleSubmit={handleSubmit}>
      <DialogContentText className={classes.dialogContent}>
        Here you are editing project with id #{id}
      </DialogContentText>
      <Form handleOnChangeProject={(e: any) => handleOnChangeProject(e)} project={project} users={users}/>
    </Dialog>
  )
}

export default Edit;
