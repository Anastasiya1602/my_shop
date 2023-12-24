import './App.css';
import { Cards } from './Cards';
import { Header } from './Header';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Product } from './Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cards/>
},
{
    path: "/product/:productId",
    element: <Product/>
}
]);

function App() {
  return (
    <div className='appContainer'>
      <Header/>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
