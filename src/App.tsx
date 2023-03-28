import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages/index';
import { Layout } from './components/Layout';
import { Header } from './components/header/Header';
import React, { useState } from 'react';
// import { IStatePage } from 'type';

function App() {
  /*
    super(props);
    this.state = {
      title: 'test',
    };
    this.setTitle = this.setTitle.bind(this);
  }
  const setTitle = (title: IStatePage) => {
    setState(title);
  };
  */
  const changeTitle = (title2: string) => {
    setTitle(title2);
  };
  const [title, setTitle] = useState('Test');
  return (
    <>
      <Header title={title} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pages.HomePage title="Home" callback={changeTitle} />} />
          <Route path="about" element={<Pages.AboutPage title="About" callback={changeTitle} />} />
          <Route
            path="createCard"
            element={<Pages.CreateCardPage title="Create card" callback={changeTitle} />}
          />
          <Route
            path="*"
            element={<Pages.NotFoundPage title="Not Page" callback={changeTitle} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
