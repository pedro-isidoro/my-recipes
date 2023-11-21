import Aside from '../../../aside/Aside';
import MobileBreads from '../MobileBreads';
import syrianBread from '/src/images/breads/pao-pita.jpg'
import Aos from 'aos';

function SyrianBread(){
    Aos.init();
    return(
        <section className='recipes-foods big-recipes-foods' id='recipes' data-aos="zoom-in" data-aos-duration="900">
            <Aside/>
            <MobileBreads/>
            <h2>Pão Pita (Pão Sírio)</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={syrianBread} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>500g de Farinha de Trigo</li>
                            <li>300g de Água em Temperatura Ambiente</li>
                            <li>25g de Azeite</li>
                            <li>10g de Sal</li>
                            <li>5g de Fermento Biológico Seco</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro em um bowl misture a farinha, o sal e o fermento, em seguida entre com o azeite, a água e mexa com uma espátula até não conseguir mais.<br/> Em seguida misture com as mãos até a massa parar de grudar nelas.<br/> Passe a massa para a bancada e verifique a consistência, ela não pode estar nem muito mole nem muito dura. Se ela estiver um pouco seca adicione 1 tampinha de água e mexa bem a massa para ela absorver bem.<br/> Agora cubra a massa e deixe descansar por 10 minutos. Após esse tempo iremos começar a sovar a massa, e o faremos por 10 minutos.<br/> Quando a massa estiver mais lisa, brilhante e elástica, module uma bola, de forma rustica, e deixe descansando dentro de um bowl untado com azeite por 60 minutos(se estiver calor apenas 30) até ela dobrar de tamanho.<br/><br/> Após isso, pegue a massa e coloque na bancada, pressione-a um pouco fazendo um cículo e dividá-la em 8 pedaços de aproximadamente 100g cada.<br/> Agora para modelar, pegue um pedaço e com a parte lisa para baixo junte as pontas no centro, como uma trouxa, vire-a e a gire com a lateral das mãos até formar uma bolinhas e deixe-a descansar por 15min, com um pano em cima, e repita o processo com os outros.<br/> Agora abra as massas na bancada formando um cículo, de até 18cm de diâmetro, e reserve em cima de um pano polvilhado com farinha e cubra-os e depois asse na ordem na qual abriu as massas.<br/><br/>Por último, coloque uma frigideira no fogão e esquente-a, em seguida vire a massa e coloque-a na frigideira, depois dque formar bolhas vire e deixe inflar por completo, aperte com a espátula para sair o ar e vire novamente até dourar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SyrianBread