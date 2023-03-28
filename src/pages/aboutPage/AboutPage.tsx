import React from 'react';
import { IRouter } from 'type';

class AboutPage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return <h2>About page</h2>;
  }
}

export { AboutPage };
