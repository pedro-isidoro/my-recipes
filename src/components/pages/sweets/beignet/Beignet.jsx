import Aside from '/src/components/aside/Aside';
// import MobileSweets from '../MobileSweets';
import beignet from '/src/images/sweets/carolina-recheada.jpg'

function Beignet(){
    return(
        <section className='recipes-foods' id='recipes'>
            <Aside />
            {/* <MobileSweets /> */}
            <h2>Carolina Reacheada</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={beignet} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>400ml de H2O</li>
                            <li>30g de Açucar Cristal</li>
                            <li>5g de Sal</li>
                            <li>30g de Leite em Pó</li>
                            <li>150g de Margarina</li>
                            <li>360g de Farinha de Trigo</li>
                            <li>4 á 6 Ovos</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro em uma panela adicione a água, o açucar, o sal, o leite em pó e a margarina e em fogo baixo misture até deixar homogêneo os ingredientes. <br/>Após ferver entre com a farinha, peneirada, e misture bem até incorporar e começar a pegar no fundo da panela, e em seguida desligue o fogo.<br/><br/> Reserve e deixe esfriar. Agora se quiser adiantar esse processo, coloque a massa em uma batedeira e bata até sair todo vapor da massa, e ela esfriar. <br/><br/>Em seguida adicione os ovos, um por um e misture com a batedeira mesmo até incorporar a massa.<br/> Pegue nossa massa e coloque em um saco de confeiteiro. <br/>Por fim em uma forma, untada e com farinha de trigo, despeje da forma que preferir a massa, deixando alguns milímetros de distância para crescer.<br/><br/>E em um forno, pré-aquecido, á 180°C, asse as massas por x minutos.<br/>Para o recheo, use o que preferir, doce de leite, chocolate, creme de confeiteiro, fique á vontade.<br/>Para a cobertura derreta o chocolate e mergulhe apenas a superfície da carolina e deixe secar até endurecer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beignet