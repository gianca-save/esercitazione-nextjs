import React from 'react';
import { useRouter } from 'next/router';

function Article() {
    const date = new Date();
    const year = date.getFullYear();
    const art_title = 'Title1';
    const router = useRouter();
    const path = router.asPath;

    return <div>{year} - {art_title} and {path}</div>

}

export default Article;