import { Link } from 'react-router-dom'

function menuClicked(){
    const arrow = document.getElementById("filling-arrow");
    arrow.classList.toggle('arrow-active');

    const idList1 = document.getElementById('filling-list');
    idList1.classList.toggle('list-active');
}

function MobileFillings(){
    return (
      <aside className="recipes-links mobileAside flex-row" id="recipes-links">
        <div className="fillings recipe-list flex-column">
          <div className="recipes-menu flex-row">
            <h3 className="link-title">Recheios</h3>
            <i
              className="fa-solid fa-caret-down arrow"
              id="filling-arrow"
              onClick={menuClicked}
            ></i>
          </div>
          <ul className="list flex-row" id="filling-list">
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
              <Link to="/" className="link-item">
                Salgados
              </Link>
            </li>
            <li className="flex-row">
              <i className="circle fa-solid fa-circle"></i>
              <Link to="/molhos" className="link-item">
                Molhos
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

export default MobileFillings