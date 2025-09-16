import style from './Home.module.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY
);

function Home() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);
    async function getDatas() {
        const { data } = await supabase.from("TEST").select();
        setDatas(data);
    }
    return (
        <div className={style.main}>
            <ul className={style.ul}>
                {datas.map((data) => (
                    <li key={data.id}>
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;