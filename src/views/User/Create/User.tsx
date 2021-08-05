import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addUser } from "redux/users/actionCreators";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: '50vw',
  }
}))

const Create = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    id: 1,
    name: "",
    email: ""
  });

  const history = useHistory();

  const dispatch: Dispatch<any> = useDispatch()

  const saveUser = useCallback(
    (user: IUser) => dispatch(addUser(user)),
    [dispatch]
  )

  const handleSubmit = () => {
    saveUser(user);
    history.push('/');
  };

  const handleOnChangeUser = (e: any): void => {
    console.log(e.target.name, e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog handleSubmit={handleSubmit}>
      <DialogContentText className={classes.dialogContent}>
        Here you are creating a new User
      </DialogContentText>
      <Form handleOnChangeUser={(e: any) => handleOnChangeUser(e)} user={user}/>
    </Dialog>
  )
}

export default Create;
