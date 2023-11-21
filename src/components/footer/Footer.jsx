import './footer.css'

function Footer(){
    return(
        <footer className="footer" id="footer">
            <div className="nets">
                <ul className='flex-row'>
                        <li>
                            <a href="https://www.instagram.com/pedrol.isidoro/" target="_blank"><i className="fab fa-instagram net instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5511970601261&text=Ol%C3%A1,%20Tudo%20bem?%0AMe%20chamo%20Pedro%20Isidoro." target="_blank"><i className="fab fa-whatsapp net whatsapp"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/pedro-isidoro" target="_blank"><i className="fab fa-github net github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/pedro-isidoro-8b1680272/" target="_blank"><i className="fab fa-linkedin net linkedin"></i></a>
                        </li>
                    </ul>
            </div>
            <div className="copyright">
                <p>
                <i className='fa-regular fa-copyright'></i>2023 Pedro Isidoro - Todos os direitos reservados. <br/> Feito por mim
                </p>
            </div>
        </footer>
    )
}

export default Footer