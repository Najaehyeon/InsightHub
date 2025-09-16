import { FaSearch, FaUser } from 'react-icons/fa';
import style from './Nav.module.css';

function Nav() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <h2 className={style.title}>Insight Hub</h2>
                <form className={style.searchContainer}>
                    <input className={style.searchInput} type="text" placeholder="Search..." />
                    <button className={style.searchButton} aria-label="Search">
                        <FaSearch className={style.searchIcon} />
                    </button>
                </form>
                <button className={style.userButton}><FaUser/></button>
            </nav>
            <hr style={{margin: 0}}/>
        </header>
    );
}

export default Nav;