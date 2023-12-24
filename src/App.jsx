import './App.css';
import { Cards } from './Cards';
import { Header } from './Header';
import { Product } from './Product';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cards/>
},
{
  path: "/product",
    element: <Product/>
}
]);

function App() {
  return (
    <div className='appContainer'>
      <Header/>
      <hr className="divider" />
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
