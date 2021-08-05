import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="name"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
      </form>
  );
};

export default Form;
