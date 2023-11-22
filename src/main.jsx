import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/app/App.jsx'
import Recipes from './components/recipes/Recipes.jsx'

import BroyerBread from './components/pages/breads/BroyerBread.jsx'
import SyrianBread from './components/pages/breads/syrianBread/SyrianBread.jsx'
import HamburguerBread from './components/pages/breads/hamburguerBread/HamburguerBread.jsx'

import CheddarSauce from './components/pages/sauces/CheddarSauce.jsx'
import RanchSauce from './components/pages/sauces/ranchSauce/RanchSauce.jsx'
import RoseSauce from './components/pages/sauces/roseSauce/RoseSauce.jsx'
import WhiteSauce from './components/pages/sauces/whiteSauce/WhiteSauce.jsx'

import ChocolateCake from './components/pages/cakes/ChocolateCake.jsx'
import ChocolateCupcake from './components/pages/cakes/chocolateCupcake/ChocolateCupcake.jsx'
import CarrotCupcake from './components/pages/cakes/carrotCupcake/CarrotCupcake.jsx'

import ApplePie from './components/pages/sweets/ApplePie.jsx'
import WoodyWoodpeckerPie from './components/pages/sweets/woodyWoodpeckerPie/WoodyWoodpeckerPie.jsx'
import RedBerryPie from './components/pages/sweets/redBerryPie/RedBerryPie.jsx'
import Beignet from './components/pages/sweets/beignet/Beignet.jsx'

import StrawberryNido from './components/pages/fillings/StrawberryNido.jsx'
import 'aos/dist/aos.css';
import './css/reset.css'
import './css/index.css'
import './css/responsive.css'

const router = createBrowserRouter([
  {
      path: "/",
      element: < App/>,
      children: [
        {
          path: "/",
          element: <Recipes />,
        },
        {
          path: "paes/pao-brioche",
          element: <BroyerBread />,
        },
        {
          path: "paes/pao-pita",
          element: <SyrianBread />,
        },
        {
          path: "paes/pao-de-hamburguer",
          element: <HamburguerBread />,
        },
        {
          path: "salgados",
          // element: < />,
        },
        {
          path: "molhos/molho-cheddar",
          element: <CheddarSauce />,
        },
        {
          path: "molhos/molho-ranch",
          element: <RanchSauce />,
        },
        {
          path: "molhos/molho-rose",
          element: <RoseSauce />,
        },
        {
          path: "molhos/molho-branco",
          element: <WhiteSauce />,
        },
        {
          path: "bolos/bolo-de-chocolate",
          element: <ChocolateCake />,
        },
        {
          path: "bolos/cupcake-de-chocolate",
          element: <ChocolateCupcake />,
        },
        {
          path: "bolos/cupcake-de-cenoura",
          element: <CarrotCupcake />,
        },
        {
          path: "doces/torta-de-maca",
          element: <ApplePie />,
        },
        {
          path: "doces/torta-do-pica-pau",
          element: <WoodyWoodpeckerPie />,
        },
        {
          path: "doces/torta-de-frutas-vermelhas",
          element: <RedBerryPie />,
        },
        {
          path: "doces/carolina-reacheada",
          element: <Beignet />,
        },
        {
          path: "recheios/ninho-com-morango",
          element: <StrawberryNido />,
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)