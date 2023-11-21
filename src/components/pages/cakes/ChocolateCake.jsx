import Aside from '../../aside/Aside';
import MobileCakes from './MobileCakes';
import chocolateCake from '/src/images/cakes/bolo-de-chocolate.jpg'
import Aos from 'aos';


function ChocolateCake(){
    Aos.init();
    return(
        <section className='recipes-foods small-recipes-foods cakes-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileCakes />
            <h2>Bolo de Chocolate</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={chocolateCake} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>100g de Manteiga</li>
                            <li>230g de Açucar Cristal</li>
                            <li>3 ovos</li>
                            <li>200g de Farinha de Trigo</li>
                            <li>200ml de Leite</li>
                            <li>6 Colheres de Sopa de Chocolate em Pó</li>
                            <li>1 Colher de Sopa de Fermento em Pó</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro unte uma forma de sua escolha com Spray desinformante, manteiga , ou o que você preferir. <br/><br/>Em uma batedeira adicione a manteiga e o açucar e bata bem, em seguida adicione os ovos e bata até ficar homogêneo.<br/><br/> Agora adicione a farinha (peneirada) e o leite á mistura, porém intercalando eles (Ex: 50 de 1 e 50 de outra), e misturando aos poucos com a ajuda de uma espátula.<br/><br/> Em seguida adicione o chocolate, também aos poucos, e por fim coloque o fermento e misture até ficar com uma massa lisa e uniforme. <br/><br/>Passe a massa para a forma e leve ao forno, pré-aquecido, á 180°C por 30 minutos ou até você achar que está pronto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChocolateCake