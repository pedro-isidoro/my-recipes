import { Link } from 'react-router-dom'
import {arrowClicked} from '../pages/pages'

function Aside(){
    return(
        <aside className="recipes-links asideFunction" id='recipes-links'>
            <i className="fa-solid fa-caret-down arrow" id='arrow' onClick={arrowClicked}></i>
            <div className='breads'>
                <h3 className="link-title">Pães</h3>
                <ul className='list flex-column' id='list-1'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/paes/pao-brioche' className='link-item'>Brioche</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/paes/pao-pita' className='link-item'>Pita</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/paes/pao-de-hamburguer' className='link-item'>Hambúrguer</Link>
                    </li>
                </ul>
            </div>
            <div className='salteds'>
                <h3 className="link-title">Salgados</h3>
                <ul className='list flex-column' id='list-2'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/' className='link-item'>Salgados</Link>
                    </li>
                </ul>
            </div>
            <div className='sauces'>
                <h3 className="link-title">Molhos</h3>
                <ul className='list flex-column' id='list-5'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/molhos/molho-cheddar' className='link-item'>Cheddar</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/molhos/molho-ranch' className='link-item'>Ranch</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/molhos/molho-rose' className='link-item'>Rosé</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/molhos/molho-branco' className='link-item'>Branco para Pasta</Link>
                    </li>
                </ul>
            </div>
            <div className='cakes'>
                <h3 className="link-title">Bolos</h3>
                <ul className='list flex-column' id='list-3'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/bolos/bolo-de-chocolate' className='link-item'>Chocolate</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/bolos/cupcake-de-chocolate' className='link-item'>Cupcake de Choco.</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/bolos/cupcake-de-cenoura' className='link-item'>Cupcake de Cenoura</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/bolos/bolo-de-pao-de-lo' className='link-item'>Pão de Ló</Link>
                    </li>
                </ul>
            </div>
            <div className='sweets'>
                <h3 className="link-title">Doces</h3>
                <ul className='list flex-column' id='list-4'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces/torta-de-maca' className='link-item'>Torta de Maça</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces/torta-cookie' className='link-item'>Torta Cookie</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces/torta-do-pica-pau' className='link-item'>Torta do Pica-Pau</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces/torta-de-frutas-vermelhas' className='link-item'>Torta de Frutas Vermelhas</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces/carolina-reacheada' className='link-item'>Carolina Reacheada</Link>
                    </li>
                </ul>
            </div>
            <div className='fillings'>
                <h3 className="link-title">Recheios</h3>
                <ul className='list flex-column' id='list-6'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/recheios/ninho-com-morango' className='link-item'>Ninho com Morango</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/' className='link-item'>Menu</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside