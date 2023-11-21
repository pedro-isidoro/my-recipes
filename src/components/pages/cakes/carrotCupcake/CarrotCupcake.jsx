import Aside from '/src/components/aside/Aside';
import MobileCakes from '../MobileCakes';
import carrotCupcake from '/src/images/cakes/cupcake-de-cenoura.png'
import Aos from 'aos';


function CarrotCupcake(){
    Aos.init();
    return(
        <section className='recipes-foods small-recipes-foods cakes-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileCakes />
            <h2>Cupcake de Cenoura</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={carrotCupcake} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>1/2 Xícara de óleo</li>
                            <li>2 ovos</li>
                            <li>200g de Cenoura</li>
                            <li>1 Pitada de Sal</li>
                            <li>1 Xícara de Açucar Cristal</li>
                            <li>1 Xícara e 1/2 de Farinha de Trigo</li>
                            <li>1 Colher de Sopa Fermento em Pó</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro descasque as cenouras e corte em rodelas, em seguida coloque-as em um liquidificador e adicione o óleo, os ovos e o sal e bata até formar uma massa bem lisinha.<br/><br/> Agora em um bowl coloque a massa e adicione o açucar e bata com um fuê até diluí-lo bem, em seguida adicione a farinha, peneirada, e o fermento e mexa até formar uma massa homogênea e lisa.<br/><br/>Por fim em uma forma específica e untada, ou com formas de papel, coloque a massa.<br/> Leve ao forno, pré-aquecido, entre 180° - 220°C até dar o ponto de sua preferência.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarrotCupcake