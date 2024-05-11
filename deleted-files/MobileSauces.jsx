import { Link } from 'react-router-dom'

function menuClicked(){
    const arrow = document.getElementById('sauce-arrow');
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('sauce-list');
    idList1.classList.toggle('list-active');
}

function MobileSauces(){
    return (
      <aside className="recipes-links mobileAside flex-row" id="recipes-links">
        <div className="sauces recipe-list flex-column">
          <div className="recipes-menu flex-row">
            <h3 className="link-title">Molhos</h3>
            <i
              className="fa-solid fa-caret-down arrow"
              id="sauce-arrow"
              onClick={menuClicked}
            ></i>
          </div>
          <ul className="list flex-row" id="sauce-list">
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/" className="link-item">
                Menu
              </Link>
            </li>
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/paes" className="link-item">
                Pães
              </Link>
            </li>
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/bolos" className="link-item">
                Bolos
              </Link>
            </li>
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/recheios" className="link-item">
                Recheios
              </Link>
            </li>
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/" className="link-item">
                Salgados
              </Link>
            </li>
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/doces" className="link-item">
                Doces
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
}

export default MobileSauces