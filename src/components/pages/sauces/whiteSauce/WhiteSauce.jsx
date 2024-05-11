import Aside from '../../../aside/Aside';
import whiteSauce from '/src/images/sauces/molho-branco.jpg'

function WhiteSauce(){
    return(
        <section className='recipes-foods' id='recipes'>
            <Aside/>
            <h2>Molho Branco</h2>
            <div className="recipe-food flex-row">
                <div className="image-ingredients flex-column">
                    <img src={whiteSauce} alt="Imagem do pão Briche" />
                    <div className="ingredients-text flex-column">
                        <h4>Ingredientes</h4>
                        <ul>
                            <li>350g de Bacon</li>
                            <li>1/2 Cebola</li>
                            <li>2 Dentes de Alho</li>
                            <li>4 Batatas Grandes</li>
                            <li>1/2 Xícara de Requeijão Cremoso</li>
                            <li>50g de Queijo Parmesão</li>
                            <li>25g de Queijo Brie</li>
                            <li>25g de Queijo Provolone Defumado</li>
                            <li>Sal á Gosto</li>
                            <li>Pimenta do Reina á Gosto</li>
                            <li>Salsinha Picada á Gosto</li>
                        </ul>
                    </div>
                </div>
                <div className="name-preparation flex-column">
                    <h4>Modo de Preparo</h4>
                    <div className="preparation flex-row">
                        <p className="firt-preparation">
                            Pique o bacon em cubinhos e coloque pra dourar, depois acrescente a cebola e alho picados e refogue bem<br/><br/>
                            Para o molho descasque e corte em cubos as batatas e coloque-as para cozinhar, com sal.<br/> Antes de despejar a água do cozimento reserve 1/2 xícara da mesma.<br/><br/>Em seguida no liquidificador entre com o requeijão, as batatas, o sal, a pimenta, o parmesão, o Brie e o Provolone Defumado e bata muito bem.<br/><br/>Por fim despeje sobre o macarrão e por cima coloque os bacons e a salsinha.  
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhiteSauce