import Aside from '../../../aside/Aside';
import MobileSauces from '../MobileSauces';
import roseSauce from '/src/images/sauces/molho-rose.webp'
import Aos from 'aos';

function RoseSauce(){
    Aos.init();
    return(
        <section className='recipes-foods small-recipes-foods sauces-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileSauces />
            <h2>Molho Rosé</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={roseSauce} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>3 Colheres de Sopa de Maionese</li>
                            <li>2 Colheres de Sopa de Hetchup</li>
                            <li>1 Colher de Sopa de Mostarda</li>
                            <li>1 Colher de Café de Páprica Defumada</li>
                            <li>1 Colher de Café de Shoyu</li>
                            <li>Cebolinha á Gosto</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Em um recipiente coloque todos os ingredientes, menos a cebolinha, e misture muito bem, e por último adicione a cebolinha e mexa só até incorporá-lo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoseSauce