import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from 'react-router-dom';
import style from './Write.module.css';

function Write() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setUser(session.user);
            } else {
                navigate('/sign');
            }
        };
        checkUser();
    }, [navigate]);

    return (
        <div className={style.container}>
            {user ? (
                <div>
                    <h2>인사이트 공유</h2>
                    <form className={style.form}>
                        <label className={style.label}>제목</label>
                        <input className={style.inputTitle}></input>
                        <label className={style.label}>URL</label>
                        <input className={style.inputURL}></input>
                        <button type="submit" className={style.button}>공유하기</button>
                    </form>
                </div>
            ) : (
                <h1>로그인 페이지로...</h1>
            )}
        </div>
    );
}

export default Write;