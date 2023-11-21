import { Link } from 'react-router-dom'

function menuClicked(){
    const arrow = document.getElementById('sweet-arrow');
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('sweet-list');
    idList1.classList.toggle('list-active');
}

function MobileSweets(){
    return(
        <aside className="recipes-links mobileAside flex-row" id='recipes-links'>
            <div className='sweets recipe-list flex-column'>
                <div className='recipes-menu flex-row'>
                    <h3 className="link-title">Doces</h3>
                    <i className="fa-solid fa-caret-down arrow" id='sweet-arrow' onClick={menuClicked}></i>
                </div>
                <ul className='list flex-row' id='sweet-list'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/' className='link-item'>Menu</Link>
                    </li>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/doces/torta-de-maca' className='link-item'>Torta de Maça</Link>
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
        </aside>
    )
}

export default MobileSweets