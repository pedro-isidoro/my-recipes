import Aside from '/src/components/aside/Aside';
import MobileSweets from '../MobileSweets';
import cookiePie from '/src/images/sweets/torta-cookie.jpg'
import Aos from 'aos';

function CookiePie(){
    Aos.init();
    return(
        <section className='recipes-foods big-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside />
            <MobileSweets />
            <h2>Torta de Frutas Vermelhas</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={cookiePie} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>200g de Manteiga Sem Sal Gelada</li>
                            <li>1 Xícara de Açucar Mascavo</li>
                            <li>1/2 Xícara de Açucar Cristal</li>
                            <li>1 Colher de Sopa de Baunilha<br/> (Extrato ou Essência)</li>
                            <li>1 Ovo</li>
                            <li>2 Xícaras e 1/2 de Farinha de Trigo</li>
                            <li>1 Colher de Chá de Bicarbonato de Sódio</li>
                            <li>1 Pitada de Sal</li>
                            <li>1 Xícara de Gotas de Chocolate</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro em uma batedeira acrescente a manteiga, os açucares, a baunilha e bata muito até ficar bem homogêneo. Em seguida acrescente o ovo e bata até misturar uniformemente na massa.<br/><br/> Agora entre com a farinha de trigo, o bicarbonato e o sal e com a ajuda de uma espátula misture até ficar uma massa bem uniforme.<br/>Acrescente as gotas de chocolate e misture elas na massa muito bem.<br/><br/> Depois, em uma forma de fundo removível, pegue uma parte da massa e pressione muito bem no centro e nas laterais da forma e reserve a outra para cobrirmos a torta.<br/><br/> Com o recheio de sua preferência, nutela/brigadeiro/chocolate derretido, coloque sobre a massa na forma e cubra com a parte da massa que reservamos.<br/><br/> Por fim no forno, pré-aquecido, á 180°C asse a torta durante 35-40 minutos ou até dourar as laterais e deixe esfriar (pois ele ficará mais crocante ao descansar).<br/><br/> Extra: Se quiser fazer de forma diferente, pode pegar uma forma de cupcakes, moldar e rechear nela, assim fazendo mini tortas. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CookiePie