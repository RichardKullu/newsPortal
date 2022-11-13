import React from 'react';
import { useState, useEffect, createContext} from 'react';
import Top from './Top';
import Posts from './Posts';
import Footer from './Footer';
import Loader from "./Loader";

export const UserContext = createContext();

const Main = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);
    let apiURL = 'https://newsportal.herokuapp.com/api/articles?fields=*&populate=art_img, category, writer.wr_photo';

    useEffect(() => {
        // let {
        //     host, hostname, href, origin, pathname, port, protocol, search
        //   } = window.location;

        // let URL1 = href.replace("3000/", "1337");
        // let URL = URL1.concat(apiURL);

        fetch(apiURL)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("Error");
                }
                return resp.json();
            })
            .then(item => {
                const temp = item.data.map(item => {
                    return {
                        'id': item.attributes.art_id,
                        'title': item.attributes.art_title,
                        'slug': item.attributes.art_slug,
                        'descr': item.attributes.art_descr === null ? " " : item.attributes.art_descr,
                        'date': item.attributes.createdAt,
                        'img': "https://newsportal.herokuapp.com" + item.attributes.art_img.data.attributes.url,
                        'category': item.attributes.category.data === null ? "All" : item.attributes.category.data.attributes.ctgy_name,
                        'category_slug': item.attributes.category.data === null ? "all" : item.attributes.category.data.attributes.ctgy_slug,
                        'writer': item.attributes.writer.data.attributes.wr_name,
                        'writer_photo': "https://newsportal.herokuapp.com" + item.attributes.writer.data.attributes.wr_photo.data.attributes.url,
                    };
                });
                setData(temp);
                setLoading(false);
                console.log(temp);
            })
            .catch(err => {
                console.log(err);
            })

    }, [apiURL]);

    return (
        <>
            <Top />
            {
                loading &&
                <Loader/>
            }
            { data &&
                <UserContext.Provider value={data}>
                    <Posts />
                    <Footer/>
                </UserContext.Provider>
            }
        </>
    );
}

export default Main;
