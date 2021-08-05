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

const Form = ({handleOnChangeUser, user}: any) => {
  const classes = useStyles();

  const handleChange = (event: any) => {
    handleOnChangeUser(event);
  };

  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
        />
      </form>
  );
};

export default Form;
