import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { toDate } from './Article';

const Blogs = () => {
  const [data, setData] = useState('');
  const [sideData, setSideData] = useState('');
  const URL = 'http://localhost:1337/api/articles?fields=*&populate=art_img, category, writer.wr_photo';
  const sideURL = 'http://localhost:1337/api/er?populate=articles.art_img,articles.writer.wr_photo,articles.category';
  
  useEffect(() => {
        fetch(URL)
        .then(resp => {
            if(!resp.ok) {
                throw new Error("Error");
            }
            return resp.json();
        })
        .then(item => {
            const temp = item.data.map(item => {
                return {
                    'id': item.attributes.art_id, 
                    'title': item.attributes.art_title,
                    'descr': item.attributes.art_descr,  
                    'content': item.attributes.art_content, 
                    'date': item.attributes.createdAt, 
                    'img': 'http://localhost:1337' + item.attributes.art_img.data.attributes.url, 
                    'category' : item.attributes.category.data.attributes.ctgy_name, 
                    'writer' : item.attributes.writer.data.attributes.wr_name, 
                    'writer_photo' : 'http://localhost:1337' + item.attributes.writer.data.attributes.wr_photo.data.attributes.url,
                };
            });
            setData(temp);
            console.log(temp);
        })
        .catch(err => {
            console.log(err);
        })

        fetch(sideURL)
        .then(resp => {
            if(!resp.ok) {
                throw new Error("Error");
            }
            return resp.json();
        })
        .then(item => {
            const temp = item.data.attributes.articles.data.map(item => {
                return {
                    'id': item.attributes.art_id,
                    'title': item.attributes.art_title,
                    'img': 'http://localhost:1337' + item.attributes.art_img.data.attributes.url,
                    'content': item.attributes.art_content,
                    'desc' : item.attributes.art_descr,
                    'date': item.attributes.createdAt,
                    'category': item.attributes.category.data.attributes.ctgy_slug,
                    'writer': item.attributes.writer.data.attributes.wr_name,
                    'writer_photo': 'http://localhost:1337' + item.attributes.writer.data.attributes.wr_photo.data.attributes.url,
                }
            });
            setSideData(temp);
            console.log(temp);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


  return (
    <div>
        <div className="container blog">
            <div className="side-content">
                <div className="posts">
                    <h1> Recent Blog Posts</h1>
                    {
                        data && data.map(item => {
                            const date = new Date(item.date);
                            const formatDate = date.toDateString();
                            const articleData = {
                                'title': item.title, 
                                'content': item.content,
                                'img': item.img,
                                'date': item.date,
                                'category': item.category_slug,
                                'writer': item.writer,
                                'writer_photo': item.writer_photo 
                            }
                            return(
                                <div className="post-content" key={item.id}>
                                    <div className="post-image">
                                            <img  src={item.img} alt="blog1" />
                                        <div className="post-info ">
                                        <span><span className="iconify" data-icon="bxs:user"></span>{item.writer} </span>     
                                        <span><span className="iconify" data-icon="uil:calender"></span>{formatDate} </span> 
                                        <span> N comments</span>
                                        </div>
                                        <div className="post_title">
                                        <h1> {item.title} </h1>
                                            <p> {item.content} </p>
                                            <Link to="article" state={articleData} className="post-title"> <button className="btn post-btn">Read More</button></Link> 
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="sidebar">
                    {/* <div className="side-category">
                        <h2>Category</h2>
                        <ul className="category-list">
                            <li><Link to="#"></Link >Software <span>(05)</span></li>
                            <li><Link to="#"></Link >Technology <span>(10)</span></li>
                            <li><Link to="#"></Link >Lifestyle <span>(02)</span></li>
                        <li><Link to="#"></Link >Mobile<span>(07)</span></li>
                        </ul>
                    </div> */}
                    <div className="popular-post">
                        <h2>Popular Post</h2>
                        {
                            sideData && sideData.map(item => {
                                const articleData = {
                                    'title': item.title, 
                                    'content': item.content,
                                    'img': item.img,
                                    'date': item.date,
                                    'category': item.category_slug,
                                    'writer': item.writer,
                                    'writer_photo': item.writer_photo 
                                }
                                return(
                                    <div className="post-side-content">
                                        <div className="post-image">
                                                <img  src={item.img} alt="blog1" />
                                            <div className="post-info ">
                                            <span><span className="iconify" data-icon="bxs:user"></span> {item.writer} </span>     
                                            <span><span className="iconify" data-icon="uil:calender"></span> {toDate(item.date)} </span> 
                                            <span> 0 comments</span>
                                            </div>
                                            <div className="post_title">
                                            <h1>{item.title}</h1>
                                                <p>{item.descr}</p>
                                                <Link to="article" state={articleData} className="post-title"><button className="btn post-btn">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <div className="form-element">
                            <input type="email" className="email" placeholder="Email"/>
                            <button className="btn post-btn">Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs