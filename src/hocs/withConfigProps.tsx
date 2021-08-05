import React from "react";

export default (WrappedComponent: any, props: any) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...props} />;
    }
  };
};
