import Aside from '../../../aside/Aside';
import ranchSauce from '/src/images/sauces/molho-ranch.jpg'

function RanchSauce(){
    return(
        <section className='recipes-foods sauces-recipes-foods' id='recipes'>
            <Aside/>
            <h2>Molho Cheddar</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={ranchSauce} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>1/2 Xícara de Creme de Leite</li>
                            <li>1/2 Xícara de Maionese</li>
                            <li>1/2 Suco de um Limão</li>
                            <li>Pimenta do Reino á Gosto</li>
                            <li>1 Colher de Café de Cebola Desidratada</li>
                            <li>1 Colher de Café de Salsa Desidratada</li>
                            <li>1 Dente de Alho</li>
                            <li>1 Colher de Sopa de Cebola Picada</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Primeiro em um recipiente coloque todos os ingredientes e com um mixer bata muito bem até incorporar tudo.<br/><br/> Se quiser mais líquido pode adicionar mais creme de leite.<br/> E se quiser com mais gosto de alho, acrescente 1 dente de alho de cada vez, bata e vá experimentando.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RanchSauce