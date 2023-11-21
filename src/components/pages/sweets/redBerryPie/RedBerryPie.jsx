import Aside from '/src/components/aside/Aside';
import MobileSweets from '../MobileSweets';
import redBerryPie from '/src/images/sweets/torta-de-frutas-vermelhas.jpg'
import Aos from 'aos';

function RedBerryPie(){
    Aos.init();
    return(
        <section className='recipes-foods big-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside />
            <MobileSweets />
            <h2>Torta de Frutas Vermelhas</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={redBerryPie} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>450g de Frutas Vermelhas</li>
                            <li>200g de Açucar Cristal</li>
                            <li>Raspas de Limão Siciliano</li>
                            <li>Suco de 1 Limão</li>
                            <li>2 Colheres de Sopa de Amido de Milho</li>
                            <li>Pode usar a massa da torta de maça <br/> se preferir</li>
                            <li>1 Xícara e 1/2 de Farinha de Trigo</li>
                            <li>1/3 de Xícara de Açucar Cristal</li>
                            <li>1/2 Colher de Chá de Fermento em Pó</li>
                            <li>100g de Manteiga Sem Sal Gelada</li>
                            <li>1 Ovo</li>
                            <li>1 Gema</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro para a massa em um bowl adicione a farinha, o açucar (em xícara), o fermento e a manteiga, misture bem com as mãos até ficar parecendo areia grossa, em siguida adicione o ovo e mexa bem, adicione a gema e mexa mais até incorporar tudo.<br/> Agora modele uma bola e coloque no plástico filme e leve á geladeira.<br/><br/>Agora para o recheio, adicione em uma frigideira funda as frutas vermelhas, o açucar, as raspas e o suco do limão e em fogo baixo misture até incorporar os ingredientes.<br/> Em segida entre com o amido de milho, diluído em água, e misture até engrossar, ou chegar no ponto de geleia, e após isso reserve.<br/><br/>Pegue a massa  e para abrir pegue dois sacos plásticos coloque ela em cima de um, divida-a em 2 partes, 1 para a parte de cima e outra para a base, abra 1 delas molde na forma, em seguida abra a outra e faça a parte de cima da forma que preferir, e coloque na geladeira.<br/> Entre com o recheio na forma com a nossa massa de base e coloque o topo. <br/><br/>Pincele gema, com um pouco de água por cima, e leve ao forno, pré-aquecido, á 180°C por 30 minutos ou até dourar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RedBerryPie