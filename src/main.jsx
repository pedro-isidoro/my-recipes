import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/app/App.jsx'
import Recipes from './components/recipes/Recipes.jsx'

import CheddarSauce from './components/pages/sauces/CheddarSauce.jsx'
import ApplePie from './components/pages/sweets/ApplePie.jsx'
import Beignet from './components/pages/sweets/beignet/Beignet.jsx'
import StrawberryNido from './components/pages/fillings/StrawberryNido.jsx'

import 'aos/dist/aos.css';
import './css/reset.css'
import './css/index.css'
import './css/responsive.css'

import BreadsSwiper from './components/pages/breads/breadsSwiper.jsx'
import CakesSwiper from './components/pages/cakes/cakesSwiper.jsx'
import FillingsSwiper from "./components/pages/fillings/fillingsSwiper.jsx";
import SaucesSwipes from './components/pages/sauces/saucesSwipes.jsx'
import SweetsSwiper from './components/pages/sweets/sweetsSwipers.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Recipes />,
      },
      {
        path: "paes",
        element: <BreadsSwiper />,
      },
      {
        path: "salgados",
        // element: < />,
      },
      {
        path: "molhos",
        element: <SaucesSwipes />,
      },
      {
        path: "bolos",
        element: <CakesSwiper />,
      },
      {
        path: "doces",
        element: <SweetsSwiper />,
      },
      {
        path: "recheios",
        element: <FillingsSwiper />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)