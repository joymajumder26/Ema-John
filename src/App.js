import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/layouts/Main';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import { productCartLoader } from './Loaders/ProductsCartLoader';


function App() {
const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      loader:()=> fetch('products.json'),
      element:<Shop></Shop>
    },
    {
      path:'/orders',
      loader:productCartLoader,
      
      element:<Orders></Orders>

    },
    {
      path:'/inventory',
      element:<Inventory></Inventory>
    },{
      path:'/about',
      element:<About></About>
    }
  ]
},




])
 
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
