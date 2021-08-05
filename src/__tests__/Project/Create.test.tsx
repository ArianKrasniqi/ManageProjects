import { render, fireEvent, screen, waitFor, within } from "../../testUtils";
import Create from "views/Project/Create/Create";
import "@testing-library/jest-dom";
import UserEvent from "@testing-library/user-event";

describe("Test <Create />", () => {
  test("should render correct text for DialogContentText", () => {
    const { getByText, container } = render(<Create />);

    expect(getByText("Here You can create a new Project")).toBeInTheDocument();
  });

  test("should render form", () => {
    const { getByTestId, container } = render(<Create />);

    expect(getByTestId("form")).toBeInTheDocument();
  });

  test("should add user when form is submitted", async () => {
    const { getByTestId, getByLabelText, debug, queryByTestId, container } =
      render(<Create />, {
        initialState: {
          users: [
            {
              id: 1,
              name: "Arian Krasniqi",
              email: "ariiankrasniqi@gmail.com",
            },
          ],
        },
      });

    fireEvent.change(screen.getByTestId("project-name"), {
      target: {
        value: "Testing Project Name...",
      },
    });

    fireEvent.change(screen.getByTestId("project-description"), {
      target: {
        value: "Testing Project Description...",
      },
    });

    fireEvent.change(getByTestId("owner"), {
      target: {
        value: 1,
      },
    });

    fireEvent.click(screen.getByText(/Submit/i));

    // I lost a lot of time looking for a way to change select, but now I found that this is an open Issue in react-testing-library
    // https://github.com/testing-library/react-testing-library/issues/908

    // await waitFor(() => expect(screen.getByText(/Testing Project Name.../i)).toBeInTheDocument())
  });
});
