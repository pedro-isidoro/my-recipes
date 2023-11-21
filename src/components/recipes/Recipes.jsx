import { Link } from 'react-router-dom'
import meCookDreamWorks from '/src/images/me-cook-dreamWorks.jpeg'
import Aos from 'aos';
import './recipes.css'
import '../pages/pages.css'

function Recipes(){
    Aos.init();
    return(
        <section className='recipes flex-column' id='recipes'>
            <h2 className="recipes-title">
                Receitas
            </h2>
            <div className="recipes-container flex-row" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <div className="recipes-container-card flex-row">
                    <div className="recipes-links-1 flex-column">
                        <Link to='/paes/pao-brioche' className='link'>Pães</Link>
                        <Link to='/' className='link'>Salgados</Link>
                        <Link to='/molhos/molho-cheddar' className='link'>Molhos</Link>
                    </div>
                    <div className="recipes-links-2 flex-column">
                        <Link to='/bolos/bolo-de-chocolate' className='link'>Bolos</Link>
                        <Link to='/doces/torta-de-maca' className='link'>Doces</Link>
                        <Link to='/recheios/ninho-com-morango' className='link'>Recheios</Link>
                    </div>
                </div>
                <img src={meCookDreamWorks} alt="" />
            </div>
        </section>
    )
}

export default Recipes