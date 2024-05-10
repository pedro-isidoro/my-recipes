import Aside from '../../../aside/Aside';
// import MobileBreads from '../MobileBreads';
import hamburguerBread from '/src/images/breads/pao-de-hamburguer.jpg'

function HamburguerBread(){
    return(
        <section className='recipes-foods' id='recipes'>
            <Aside/>
            {/* <MobileBreads/> */}
            <h2>Pão de Hambúrguer</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={hamburguerBread} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>60g de Leite Integral</li>
                            <li>27g de Água em Temperatura Ambiente</li>
                            <li>20g de Farinha de Trigo</li>
                            <li>120g de Leite Integral á 35°C</li>
                            <li>9g de Fermento Biológico</li>
                            <li>320g de Farinha de Trigo</li>
                            <li>35g de Açucar Cristal</li>
                            <li>7g de Sal</li>
                            <li>1 Ovo</li>
                            <li>1 Gema</li>
                            <li>42g de Manteiga em Ponto Pomada<br/>(Quase derretendo, QUASE)</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro Faremos a esponja, misturando o leite morno (120g) e o fermento.<br/> Em seguida faremos o TangZhong, em fogo baixo misture o leite(60g), a água e a farinha(20g) até ficar no ponto, quase grudando na panela, isso deixará o pão mais fofinho.<br/><br/> Agora em uma batedeira misture o restante da farinha, o açucar e o sal, adicione a esponja e bata um pouco. A seguir adicione o TangZhong, o ovo e a gema e bata mais um pouco, raspando os lados do bowl de vez em quando.<br/> Comece a adicionar aos poucos a manteiga e deixe bater por uns 8 minutos.<br/><br/> Depois passe a massa para uma bancada e faça uma bola e deixe-a descansar num bowl untado por 1h e 30m, e coberto com um pano. Após isso divida a massa em 6 partes iguais, 100g cada, modele-as em bolinhas e as coloque em uma assadeira, forrada com papel manteiga untado, cubra-as e deixe crescer por 1h e 30m á 2h, ou até dobrar de tamanaho.<br/><br/> Após esse tempo, pincele-as com ovo batido e asse, no forno pré-aquecido, á 190°C por 17minutos, ou até dourar, então retire os pães do forno e pinceli manteiga deretida sobre eles.<br/><br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HamburguerBread