import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addProject } from "redux/projects/actionCreators";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: "50vw",
  },
}));

const Create = () => {
  const classes = useStyles();
  const [project, setProject] = useState({
    id: 1,
    name: "",
    description: "",
    owner: "",
  });

  const history = useHistory();

  const users: readonly IUser[] = useSelector(
    (state: UsersState | any) => state.users.users,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveProject = useCallback(
    (project: IProject) => dispatch(addProject(project)),
    [dispatch]
  );

  const handleSubmit = () => {
    saveProject(project);
    history.push("/");
  };

  const handleOnChangeProject = (e: any): void => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog handleSubmit={handleSubmit}>
      <DialogContentText className={classes.dialogContent}>
        Here You can create a new Project
      </DialogContentText>
      <Form
        handleOnChangeProject={(e: any) => handleOnChangeProject(e)}
        project={project}
        users={users}
      />
    </Dialog>
  );
};

export default Create;
