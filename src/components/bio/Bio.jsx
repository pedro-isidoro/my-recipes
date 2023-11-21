import meDreamWorks from '/src/images/me-dreamWorks.png'
import Aos from 'aos';
import './bio.css'

function Bio(){
    Aos.init();
    return(
        <section className='bio flex-column'>
            <h2 className="bio-title">
                Sobre mim
            </h2>
            <div className="bio-container flex-row" data-aos="flip-up" data-aos-duration="1500">
                <img src={meDreamWorks} alt="Imagem animada minha" />
                <div className="bio-div flex-row">
                    <p>
                    Eu me chamo Pedro, sou um estudante de TI, porém com o Hooby de cozinhar. E decidi fazer essa simples Landing Page com minhas Receitas preferidas.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Bio