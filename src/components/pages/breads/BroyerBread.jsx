import Aside from '../../aside/Aside';
// import MobileBreads from './MobileBreads';
import broyerBread from '/src/images/breads/pao-brioche.jpg'

function BroyerBread(){
    return(
        <section className='recipes-foods' id='recipes'>
            <Aside/>
            {/* <MobileBreads/> */}
            <h2>Pão Brioche</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={broyerBread} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>3 Colheres de Sopa de Açucar Refinado</li>
                            <li>10g de Fermento Biológico Seco</li>
                            <li>200ml de Água Morna</li>
                            <li>1 Ovo</li>
                            <li>3 Xícaras de Farinha de Trigo</li>
                            <li>1/2 Colher de Chá de Sal</li>
                            <li>2 Colheres de Sopa de Óleo</li>
                            <li>1 Gema</li>
                            <li>1 Colher de Sopa de Leite</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro em um bowl coloque o açucar, o fermento e a água morna, assim ativando o fermento, e deixe agir por 15 minutos com um pano limpo cobrindo o bowl.<br/><br/>
                        Após descansar, adicione a primeira xícara de farinha, o ovo (batido) e misture bem, depois adicione a segunda xícara e o sal, misture mais uma vez e agoraentre com a última xícara de farinha e o óleo e mexa até incorporar a massa.<br/> Agora retire a massa do bowl e sove-a por 3 minutos. Em seguida leve-a novamente para o bowl, cubra-o e deixe a massa descansar por 30 minutos.<br/><br/> Após o descanso pegue a massa e trabalhe nela, sovando-a, por mais 10 minuto, e em seguida pode abri-la e formata-la á sua maneira.<br/> Em uma forma untada coloque o pão e deixe crescer de 30 á 40 minutos, ou até dobrar de tamanho. Enquanto isso ligue o forno para pr-aquecelo à 180°C.<br/><br/> Após o pão crescer pincele sobre ele a gema misturada com leite, e leve-o para assar no forno por 25 minutos ou até ele dourar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BroyerBread