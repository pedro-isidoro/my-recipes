import Aside from '/src/components/aside/Aside';
import spongeCake from '/src/images/cakes/pao-de-lo.jpg'


function SpongeCake(){
    return(
        <section className='recipes-foods cakes-recipes-foods' id='recipes'>
            <Aside/>
            <h2>Bolo Pão de Ló</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={spongeCake} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>5 ovos</li>
                            <li>230g de Açucar Cristal</li>
                            <li>200g de Farinha de Trigo</li>
                            <li>1 Colher de Sopa de Essência de Baunilha</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                        Primeiro unte uma forma de sua escolha com Spray desinformante, manteiga , ou o que você preferir, e no fundo dela coloque uma folha de papel manteiga. E já deixe o forno ligado á 180°C para pré-aquecelo<br/><br/> Em seguida em um bowl de batedeira, ou de vidro, coloque os ovos e o açucar e bata muito bem durante 15 minutos, mais ou menos, até aumentar muito em quantidade e ficar com uma cor bem perto do branco.<br/> Esse processo que fará a massa crescer, pois faz com que a massa fique aerada<br/>Entre com a Essência de baunilha, ou qualquer ingrediente da sua escolha para dar aroma a massa (como raspas de laranja entre outros).<br/><br/>Em seguida Entre com 1/3 da farinha peneirada, e misture com o auxílio de um Fouet com movimentos de baixo para cima, devagar para não perder o ar que colocamos na massa, após incorpora-la repita esse processo com o restante da farinha.<br/><br/> Por fim despeje com cuidado, a massa na forma já preparada, e mande para o forno pré-aquecido.<br/><br/> Para se verificar o ponto do bolo, não se fura com palito, coloque a ponta do seu dedo e aperte de leve a massa, se ela não voltar e você escutar umas bolinhas se estourando, e estiver com as laterais de sua preferência, está pronta sua massa de pão de ló.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpongeCake