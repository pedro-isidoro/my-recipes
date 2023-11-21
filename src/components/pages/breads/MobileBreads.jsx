import { Link } from 'react-router-dom'

function menuClicked(){
    const arrow = document.getElementById('bread-arrow');
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('bread-list');
    idList1.classList.toggle('list-active');
}

function MobileBreads(){
    return(
        <aside className="recipes-links mobileAside flex-row" id='recipes-links'>
            <div className='breads recipe-list flex-column' id='list-1'>
                <div className='recipes-menu flex-row'>
                    <h3 className="link-title">Pães</h3>
                    <i className="fa-solid fa-caret-down arrow" id='bread-arrow' onClick={menuClicked}></i>
                </div>
                <ul className='list flex-row' id='bread-list'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/' className='link-item'>Menu</Link>
                    </li>
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
        </aside>
    )
}

export default MobileBreads