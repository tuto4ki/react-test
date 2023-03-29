import React, { useEffect } from 'react';
import { IRouter } from 'type';

function AboutPage(props: IRouter): JSX.Element {
  useEffect(() => {
    props.callback(props.title);
  });
  return <h2>About page</h2>;
}

export { AboutPage };
