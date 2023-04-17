import { Outlet } from 'react-router-dom';

import { Footer } from '../footer/Footer';

function Layout(): JSX.Element {
  return (
    <>
      <main className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Layout };
