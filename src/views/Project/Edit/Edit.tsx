import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Dialog from "components/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useSelector, shallowEqual } from "react-redux"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    minWidth: '50vw',
  }
}))

const Edit = ({match}: any) => {
  const classes = useStyles();
  const id = match.params.id;
  const [project, setProject] = useState({
    id: 1,
    name: "",
    description: "",
    owner: ""
  });

  const projects: readonly IProject[] = useSelector(
    (state: ProjectsState | any) => state.projects.projects,
    shallowEqual
  )
  
  useEffect(() => {
    const findProject: IProject | undefined = projects.find((project) => project.id == id);
    if(findProject)
      setProject(findProject);
  }, [])

  const handleSubmit = () => {
    console.log('handleSubmit for Edit');
  };

  return (
    <Dialog handleSubmit={handleSubmit}>
      <DialogContentText className={classes.dialogContent}>
        Here you are editing project with id #{id}
      </DialogContentText>
      <Form project={project}/>
    </Dialog>
  )
}

export default Edit;
