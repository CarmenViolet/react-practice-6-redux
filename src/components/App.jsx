import {Route, Routes} from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { AddBookPage } from 'pages/AddBookPage/AddBookPage';

export const App = () => {
  return (
    <>
    <Routes>
     <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='addbook' element={<AddBookPage/>}/>
     </Route>
    </Routes>
    </>
  );
};
