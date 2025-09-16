import style from './Menu.module.css';

function Menu() {
    return(
        <div className={style.menu}>
            <ul className={style.ul}>
                <li className={style.li}><a href='/' id={style.a}>최신글</a></li>
                <li className={style.li}><a href='/' id={style.a}>인기글</a></li>
                <li className={style.li}><a href='/' id={style.a}>질문글</a></li>
                <li className={style.li}><a href='/' id={style.a}>팀빌딩</a></li>
                <li className={style.li}><a href='/' id={style.a}>글작성</a></li>
            </ul>
            <hr style={{marginLeft: 30, marginRight: 0}} />
        </div>
    )
}

export default Menu;