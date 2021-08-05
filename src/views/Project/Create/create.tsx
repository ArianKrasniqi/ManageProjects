import { useState, useEffect, useCallback } from 'react';
import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addProject } from "redux/projects/actionCreators";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: '50vw',
  }
}))

const Create = ({history}: any) => {
  const classes = useStyles();
  const [project, setProject] = useState({
    id: 1,
    name: "",
    description: "",
    owner: ""
  });

  const dispatch: Dispatch<any> = useDispatch()

  const saveProject = useCallback(
    (project: IProject) => dispatch(addProject(project)),
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
        Here You can create a new Project
      </DialogContentText>
      <Form handleOnChangeProject={(e: any) => handleOnChangeProject(e)} project={project}/>
    </Dialog>
  )
}

export default Create;
