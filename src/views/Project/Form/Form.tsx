import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import users from "data/users";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = (props: any) => {
  const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <FormControl >
          <InputLabel id="demo-simple-select-label">Owner</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            {users.map((user) => (
              <MenuItem value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
  );
};

export default Form;
