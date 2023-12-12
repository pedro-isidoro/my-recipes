import { Link } from 'react-router-dom'

function menuClicked(){
    const arrow = document.getElementById('cake-arrow');
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('cake-list');
    idList1.classList.toggle('list-active');
}

function MobileCakes(){
    return(
        <aside className="recipes-links mobileAside flex-row" id='recipes-links'>
            <div className='cakes recipe-list flex-column'>
                <div className='recipes-menu flex-row'>
                    <h3 className="link-title">Bolos</h3>
                    <i className="fa-solid fa-caret-down arrow" id='cake-arrow' onClick={menuClicked}></i>
                </div>
                <ul className='list flex-row' id='cake-list'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/' className='link-item'>Menu</Link>
                    </li>
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
        </aside>
    )
}

export default MobileCakes