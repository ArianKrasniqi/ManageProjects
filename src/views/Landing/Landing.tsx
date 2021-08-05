import { Search as SearchIcon, PersonAdd, PostAdd } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import PaginationTable from "components/PaginationTable/PaginationTable";
import { useSelector, shallowEqual } from "react-redux"

import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10vh 25vw",
  },
  search: {
    border: "1px solid green",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  },
  addUser: {
    width: "50px",
    backgroundColor: "green",
    borderRadius: "10px",
    marginRight: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addProject: {
    width: "50px",
    backgroundColor: "green",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Landing = () => {
  const classes = useStyles();

  const projects: readonly IProject[] = useSelector(
    (state: ProjectsState | any) => state.projects.projects,
    shallowEqual
  )

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Link className={classes.addUser} to="/user/create">
          <PersonAdd />
        </Link>
        <Link className={classes.addProject} to="/project/create">
          <PostAdd />
        </Link>
      </div>
      <PaginationTable data={projects} />
    </div>
  );
};

export default Landing;
