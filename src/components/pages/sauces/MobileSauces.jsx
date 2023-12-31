import { Link } from 'react-router-dom'

function menuClicked(){
    const arrow = document.getElementById('sauce-arrow');
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('sauce-list');
    idList1.classList.toggle('list-active');
}

function MobileSauces(){
    return(
        <aside className="recipes-links mobileAside flex-row" id='recipes-links'>
            <div className='sauces recipe-list flex-column'>
            <div className='recipes-menu flex-row'>
                    <h3 className="link-title">Molhos</h3>
                    <i className="fa-solid fa-caret-down arrow" id='sauce-arrow' onClick={menuClicked}></i>
                </div>
                <ul className='list flex-row' id='sauce-list'>
                    <li className='flex-row'>
                        <i className="circle fa-solid fa-circle"></i>
                        <Link to='/' className='link-item'>Menu</Link>
                    </li>
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
                        <Link to='/molhos/molho-branco' className='link-item'>Branco (Autoral)</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default MobileSauces