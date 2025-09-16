import style from './Home.module.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY
);

const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (minutes < 1) return '방금전';
    if (hours < 1) return `${minutes}분 전`;
    if (days < 1) return `${hours}시간 전`;
    if (months < 1) return `${days}일 전`;
    if (years < 1) return `${months}달 전`;
    return `${years}년 전`;
}

function Home() {
    const [insights, setInsights] = useState([]);
    useEffect(() => {
        getInsights();
    }, []);
    async function getInsights() {
        const { data } = await supabase
            .from("insight")
            .select()
            .order("created_at", { ascending: false });
        setInsights(data);
    }
    return (
        <div className={style.main}>
            <ol className={style.ul}>
                {insights.map((insight) => (
                    <li key={insight.id}>
                        <p style={{marginBottom: 0}}>
                            <a href={insight.content_url} className={style.li}>{insight.title}</a>
                        </p>
                        <p id={style.sub}>{insight.like} 좋아요 | {formatTimeAgo(insight.created_at)} | 댓글 {insight.comment} | by {insight.author}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Home;