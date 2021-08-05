import { ReactNode } from "react";
import { Router } from "react-router-dom";
import { createStore, EmptyObject } from "redux";
import { rootReducer, StoreType } from "./redux/store";
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux';

import { createMemoryHistory } from "history";

interface RenderOptionsType {
  initialState: ProjectsState | UsersState | EmptyObject;
  store: StoreType;
  [x: string]: StoreType | unknown, 
}

const AllTheProviders = ({ children, store, history }: any) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};


function render(
  ui:React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: any) {
    return (
      <AllTheProviders store={store} history={history}>
        {children}
      </AllTheProviders>
    );
  }
 
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }