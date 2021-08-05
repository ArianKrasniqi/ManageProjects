import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: '50vw',
  }
}))

const Create = () => {
  const classes = useStyles();

  const handleSubmit = () => {
    console.log('handleSubmit for Create');
  };

  return (
    <Dialog handleSubmit={handleSubmit}>
      <DialogContentText className={classes.dialogContent}>
        Here You can create a new Project
      </DialogContentText>
      <Form />
    </Dialog>
  )
}

export default Create;
