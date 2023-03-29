import React, { useEffect } from 'react';
import { IRouter } from 'type';

function NotFoundPage(props: IRouter) {
  useEffect(() => {
    props.callback(props.title);
  });
  return <h2>Page not found</h2>;
}

export { NotFoundPage };
