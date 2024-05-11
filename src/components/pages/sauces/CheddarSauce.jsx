import Aside from '../../aside/Aside';
import cheddarSauce from '/src/images/sauces/molho-cheddar.jpg'

function CheddarSauce(){
    return(
        <section className='recipes-foods sauces-recipes-foods' id='recipes'>
            <Aside/>
            <h2>Molho Cheddar</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={cheddarSauce} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>250g de Cheddar</li>
                            <li>200g de Creme de Leite</li>
                            <li>1 Colher de Sopa de Manteiga</li>
                            <li>Páprica Defumada á Gosto</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro corte o chedar e pedaços pequenos e reserve, em seguida em uma panela coloque a manteiga e o creme de leite, e em fogo baixo, para médio, vá mexendo bem até incorporar.<br/><br/> Vá adicionando aos poucos o cheddar e mexa bem até derretê-lo completamente.<br/><br/> Por último adicione páprica á gosto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheddarSauce