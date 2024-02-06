import Aside from '/src/components/aside/Aside';
import MobileSweets from '../MobileSweets';
import woodyWoodpeckerPie from '/src/images/sweets/torta-do-pica-pau.jpg'
import Aos from 'aos';

function WoodyWoodpeckerPie(){
    Aos.init();
    return(
        <section className='recipes-foods small-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside />
            <MobileSweets />
            <h2>Torta do Pica-Pau</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={woodyWoodpeckerPie} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>350g de Bolacha Amanteigada</li>
                            <li>100g de Manteiga sem Sal</li>
                            <li>4 Colheres de Sopa de Manteiga</li>
                            <li>3 Colheres de Sopa de Farinha</li>
                            <li>1 Xícara de Leite</li>
                            <li>3/4 de Xícara de Açucar Mascavo</li>
                            <li>1 Colher de Chá de Baunilha<br/> (Extrato ou Essência)</li>
                            <li>1 Pitada de Sal</li>
                            <li>200g de Chocolate <br/>(de sua preferência)</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro triture muito bem as bolachas e misture com a manteiga derretida(as 100g). Após isso coloque numa forma, molde apertando bem e reserve. <br/><br/>Para o recheio, em fogo baixo, numa panela coloque a manteiga(em colheres), a farinha, o leite, o açucar mascavo, a baunilha e o sal e misture bem até chegar no ponto de caramelo, quase grudando no fundo da panela. <br/>Coloque o recheio em cima da forma reservada com a massa, e após isso mande para o forno, pré-aquecido, em fogo baixo por 10 minutos. Depois deslique e mantenha no "bafo" por mais 5 minutos. <br/><br/>Enquanto isso, derreta o chocolate e reserve-o. <br/>Após retirar a forma do forno coloque o chocolate reservado por cima da torta e deixe esfriar em temperatura ambiente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WoodyWoodpeckerPie