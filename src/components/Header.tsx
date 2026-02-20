import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <nav className ="flex items-center justify-between flex-wrap bg-gray-200 p-8">
                    <button className ="font-bold">
                        <Link to='/'>На главную страницу</Link>
                    </button>
                    <button className ="font-bold">
                        <Link to='/Login'>Войти</Link>
                    </button>
                    <button className ="font-bold">
                        <Link to='/Sign'>Регистрация</Link>
                    </button>
                    <button className ="font-bold">
                        <Link to='/contacts'>Контакты</Link>
                    </button>
                    <button className ="font-bold">
                        <Link to='/about'>О нас</Link>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header
