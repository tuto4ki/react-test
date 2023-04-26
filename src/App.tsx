import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, CreateCardPage, NotFoundPage } from './components/pages/index';
import { Layout } from './components/layout/Layout';
import { Header } from './components/header/Header';
import { useAppDispatch, useAppSelector } from './hook';
import { fetchProducts } from './store/listProductsSlice';

import './index.scss';

function App() {
  const changeTitle = (title2: string) => {
    setTitle(title2);
  };
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();
  const valueSearch = useAppSelector((state) => state.searchInput);
  useEffect(() => {
    dispatch(fetchProducts(valueSearch.value));
  }, [dispatch, valueSearch.value]);
  return (
    <>
      <Header title={title} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage title="Home" callback={changeTitle} />} />
          <Route path="about" element={<AboutPage title="About" callback={changeTitle} />} />
          <Route
            path="createCard"
            element={<CreateCardPage title="Create card" callback={changeTitle} />}
          />
          <Route path="*" element={<NotFoundPage title="Not Page" callback={changeTitle} />} />
        </Route>
      </Routes>
    </>
  );
}
/*
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
*/
export default App;
