import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { Layout } from './components/Layout';
import { Header } from './components/header/Header';
import React from 'react';
import { IStatePage } from 'type';
import { CreateCardPage } from './pages/createCardPage/CreateCardPage';
class App extends React.Component<Record<string, never>, IStatePage> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      title: 'test',
    };
    this.setTitle = this.setTitle.bind(this);
  }

  private setTitle(title: IStatePage) {
    this.setState(title);
  }

  render(): React.ReactNode {
    return (
      <>
        <Header title={this.state.title} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage title="Home" callback={this.setTitle} />} />
            <Route path="about" element={<AboutPage title="About" callback={this.setTitle} />} />
            <Route
              path="createCard"
              element={<CreateCardPage title="Create card" callback={this.setTitle} />}
            />
            <Route path="*" element={<NotFoundPage title="Not Page" callback={this.setTitle} />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
