import './header.css'

function Header(){
    return(
        <header className='header-div'>
            <div className="logo">
                <h1>Minhas Receitas</h1>
            </div>
            <nav className="menu">
                <ul className='flex-row'>
                    <li>
                        <a className='link-a' href="#recipes">Receitas</a>
                    </li>
                    <li>
                        <a className='link-a' href="#footer">Contatos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header