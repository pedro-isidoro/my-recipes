import Aside from '../../aside/Aside';
import MobileSweets from './MobileSweets';
import applePie from '/src/images/sweets/torta-de-maca.jpg'
import Aos from 'aos';

function ApplePie(){
    Aos.init();
    return(
        <section className='recipes-foods sweet-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileSweets />
            <h2>Torta de Maçã</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={applePie} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>6 Maçãs Grandes ou 12 Pequenas</li>
                            <li>65g de Açucar Mascavo</li>
                            <li>25g de Açucar Cristal</li>
                            <li>45g de Manteiga Sem Sal</li>
                            <li>1 Colher de Sopa de Canela em Pó</li>
                            <li>1 Colher de Sopa de Amido de Milho</li>
                            <li>1/2 Suco de 1 Limão</li>
                            <li>Noz Moscada á Gosto</li>
                            <li>300g de Farinha de Trigo</li>
                            <li>180g de Manteiga sem Sal</li>
                            <li>60g de Água gelada</li>
                            <li>1 Pitada de Sal</li>
                            <li>2 Colheres de Sopa de Açucar Cristal</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro para o recheio, comece descascando as maças e tirando seu miolo, agora corte do jeito que preferir, mas de preferência pedaços médios para pequenos, e reserve.<br/><br/> Em seguida adicione em uma frigideira funda, a manteigar, as maçãs, os dois açucares, a canela, a noz moscada e o suco do limão.<br/> Agora em fogo baixo mexa até chegar num ponto parecido com caramelo, entre com o amido de milho, continue mexendo até incorporar, e após isso reserve.<br/><br/> Para a massa, em um processador coloque a farinha branca, o sal, as colheres de açucar, a manteiga gelada e a água gelada, e misture bem até virar uma "areia mais grossa". Caso não tenha um processador, misture com uma espáula ou com as mãos, mas pouco para não esquentar a massa.<br/> Agora deixe a massa descansar por 30 minutos na geladeira, dentro de um saco ou bowl. Em seguida abra a massa, divida-a na metade, uma corte no formato e tamanho que preferir, faça furos no fundo dela, e a outra use para cobrir a torta.<br/><br/> Após montar a base coloque o recheio, que havia reservado no começo,você pode fazer um trançado e colocar sobre a torta, ou apenas abrir a massa e colocar por cima, sem esquecer de fazer furinhos nela. E deixe descansar na geladeira por 10 minutos<br/><br/> Por último pincele gema de ovo por cima, e polvilhe um pouco de açucar cristal tambem, e asse no forno, pré-aquecido, entre 210°-225°C por 25 minutos ou até dourar. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApplePie