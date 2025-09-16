import { FaSearch } from 'react-icons/fa';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <h2 className={style.title}><Link to="/" id={style.logo}>Insight Hub</Link></h2>
                <form className={style.searchContainer}>
                    <input className={style.searchInput} type="text" placeholder="Search..." />
                    <button className={style.searchButton} aria-label="Search">
                        <FaSearch className={style.searchIcon} />
                    </button>
                </form>
                <Link to="/sign" id={style.login}>로그인</Link>
            </nav>
            <hr style={{margin: 0}}/>
        </header>
    );
}

export default Nav;