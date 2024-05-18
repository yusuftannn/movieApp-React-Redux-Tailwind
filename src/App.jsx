import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import * as ROUTES from './constants/routes';
import MyList from './pages/MyList';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [myList, setMyList] = useState([]);

  const addToMyList = (item) => {
    if (!myList.find((i) => i.id === item.id)) {
      setMyList([...myList, item]);
    }
  };

  const removeFromMyList = (id) => {
    setMyList(myList.filter((item) => item.id !== id));
  };

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path={ROUTES.HOME}
          element={<Home addToMyList={addToMyList} />}
        />
        <Route
          exact
          path={ROUTES.MOVIES}
          element={<Movies addToMyList={addToMyList} />}
        />
        <Route
          exact
          path={ROUTES.MYLIST}
          element={<MyList myList={myList} removeFromMyList={removeFromMyList} />}
        />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;