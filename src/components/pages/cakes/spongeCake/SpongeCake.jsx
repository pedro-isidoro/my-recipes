import Aside from '/src/components/aside/Aside';
import MobileCakes from '../MobileCakes';
import spongeCake from '/src/images/cakes/pao-de-lo.jpg'
import Aos from 'aos';


function SpongeCake(){
    Aos.init();
    return(
        <section className='recipes-foods big-recipes-foods cakes-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileCakes />
            <h2>Bolo de Chocolate</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={spongeCake} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>5 ovos</li>
                            <li>230g de Açucar Cristal</li>
                            <li>200g de Farinha de Trigo</li>
                            <li>1 Colher de Sopa de Essência de Baunilha</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro unte uma forma de sua escolha com Spray desinformante, manteiga , ou o que você preferir. <br/><br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpongeCake