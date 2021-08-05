import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: '50vw',
  }
}))

const Edit = ({match}: any) => {
  const classes = useStyles();

  const id = match.params.id;

  const handleSubmit = () => {
    console.log('handleSubmit for Edit');
  };

  return (
    <Dialog handleSubmit={handleSubmit}>
      <DialogContentText className={classes.dialogContent}>
        Here you are editing project with id #{id}
      </DialogContentText>
      <Form />
    </Dialog>
  )
}

export default Edit;
