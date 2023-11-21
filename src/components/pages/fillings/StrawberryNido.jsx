import Aside from '../../aside/Aside';
import MobileFillings from './MobileFillings';
import strawberryNido from '/src/images/fillings/ninho-com-morango.jpg'
import Aos from 'aos';

function StrawberryNido(){
    Aos.init();
    return(
        <section className='recipes-foods small-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileFillings />
            <h2>Ninho com Morango</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={strawberryNido} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>300g Morango</li>
                            <li>30g de Açucar Cristal</li>
                            <li>1 Caixa de Leite Condensado</li>
                            <li>1/2 Caixa de Creme de Leite (100g)</li>
                            <li>60g de Leite em Pó</li>
                            <li>100ml de Chantily</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro corte os morangos em rodelas ou pedaços, misture o açucar e deixe desidratando dentro de uma peneira (em baixo coloque um pote para usar a água que ele solta depois para molhar a massa de bolo se quiser, misturando com um pouco de leite).<br/><br/>Agora iremos fazer um brigadeiro branco, em uma panela anti-aderente, coloque o leite consensado, o creme de leite e o leite em pó, peneirado, e misture bem até ficar homogêneo. <br/>Em seguida em fogo vaixo, mexa até conseguir ver o fundo da panela, ou chegar no ponto Moisés, e reserve com um papel filme por cima para não fazer uma película no brigadeiro. <br/><br/>Agora em um bowl coloque o chantily e bata até chegar no ponto. Em seguida adicione o brigadeiro, depois de ja estar frio, e misture muito bem. E por fim adicione os pedaços de morango.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StrawberryNido