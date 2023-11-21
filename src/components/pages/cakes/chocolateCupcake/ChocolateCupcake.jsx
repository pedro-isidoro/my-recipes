import Aside from '/src/components/aside/Aside';
import MobileCakes from '../MobileCakes';
import chocolateCupcake from '/src/images/cakes/cupcake-de-chocolate.webp'
import Aos from 'aos';


function ChocolateCupcake(){
    Aos.init();
    return(
        <section className='recipes-foods small-recipes-foods cakes-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileCakes />
            <h2>Cupcake de Chocolate</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={chocolateCupcake} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>200ml de Leite</li>
                            <li>140g de óleo</li>
                            <li>2 ovos</li>
                            <li>280g de Farinha de Trigo</li>
                            <li>200g de Açucar Cristal</li>
                            <li>100g Chocolate em Pó</li>
                            <li>12g Fermento em Pó</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro em um bowl coloque o leite, o óleo e os ovos e bata com um Fuê até ficar homogêneo.<br/><br/>Em seguida adicione o açucar, o chocolate e a farinha, peneirados, e o fermento e bata muito bem até formar uma massa lisa, homogênea e brilhosa.<br/><br/> Por fim em uma forma específica e untada, ou com formas de papel, coloque a massa.<br/> Se quiser pesar, colocando 40g de massa, rende aproximadamente 24 unidades.<br/><br/> Leve ao forno, pré-aquecido, entre 180° - 220°C até dar o ponto de sua preferência. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChocolateCupcake