import { useState, useEffect } from "react";

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

const Form = ({handleOnChangeProject, project}: any) => {
  const classes = useStyles();

  const handleChange = (event: any) => {
    handleOnChangeProject(event);
  };

  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Project Name"
          type="name"
          fullWidth
          onChange={handleOnChangeProject}
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          name="description"
          label="Project Description"
          type="description"
          fullWidth
          onChange={handleOnChangeProject}
        />
        <FormControl >
          <InputLabel id="demo-simple-select-label">Owner</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="owner"
            name="owner"
            value={project?.owner}
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
