import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = ({handleOnChangeProject, project, users}: any) => {
  const classes = useStyles();

  const handleChange = (event: any) => {
    handleOnChangeProject(event);
  };

  return (
      <form data-testid="form" className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          inputProps={{  "data-testid":"project-name" }}
          label="Project Name"
          type="text"
          value={project?.name}
          fullWidth
          onChange={handleOnChangeProject}
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          name="description"
          inputProps={{  "data-testid":"project-description" }}
          label="Project Description"
          type="text"
          value={project?.description}
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
            // native
            inputProps={{
              "data-testid": "owner"
            }}
          >
            {users.map((user: IUser, index: number) => (
              <MenuItem data-testid={`option-${index+1}`} key={index} value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
  );
};

export default Form;
