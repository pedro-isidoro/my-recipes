import { Link } from 'react-router-dom'

function Aside(){
    return (
      <aside className="recipes-links asideFunction" id="recipes-links">
        <div className="breads">
          <h3 className="link-title">
            <Link to="/paes" className="link-item">
              Pães
            </Link>
          </h3>
        </div>
        <div className="salteds">
          <h3 className="link-title">
            <Link to="/" className="link-item">
              Salgados
            </Link>
          </h3>
        </div>
        <div className="sauces">
          <h3 className="link-title">
            <Link to="/molhos" className="link-item">
              Molhos
            </Link>
          </h3>
        </div>
        <div className="cakes">
          <h3 className="link-title">
            <Link to="/bolos" className="link-item">
              Bolos
            </Link>
          </h3>
        </div>
        <div className="sweets">
          <h3 className="link-title">
            <Link to="/doces" className="link-item">
              Doces
            </Link>
          </h3>
        </div>
        <div className="fillings">
          <h3 className="link-title">
            <Link to="/recheios" className="link-item">
              Recheios
            </Link>
          </h3>
        </div>
        <div className="menu">
          <h3 className="link-title">
            <Link to="/" className="link-item">
              Menu
            </Link>
          </h3>
        </div>
      </aside>
    );
}

export default Aside