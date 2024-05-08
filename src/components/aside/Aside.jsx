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
                        <Link to='/paes' className='link-item'>Pães</Link>
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
                        <Link to='/molhos' className='link-item'>Molhos</Link>
                    </li>
                </ul>
            </div>
            <div className='cakes'>
                <h3 className="link-title">Bolos</h3>
                <ul className='list flex-column' id='list-3'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/bolos' className='link-item'>Bolos</Link>
                    </li>
                </ul>
            </div>
            <div className='sweets'>
                <h3 className="link-title">Doces</h3>
                <ul className='list flex-column' id='list-4'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces' className='link-item'>Doces</Link>
                    </li>
                </ul>
            </div>
            <div className='fillings'>
                <h3 className="link-title">Recheios</h3>
                <ul className='list flex-column' id='list-6'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/recheios' className='link-item'>Recheios</Link>
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