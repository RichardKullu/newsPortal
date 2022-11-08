import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext  from "./Main";

const Posts = () => {
  const data = useContext(UserContext);

  useEffect(() => {
    console.log("Posts running useEffect...");
  }, [data]);

    /* 
    <div className={cls} key={item.id} data-tag={item.category_slug}>
        
        <img  src={item.img} alt="img" className="post-img" />
        
        <h2 className="category"> {item.category} </h2>
        
        <Link to={`/${item.id}`}  className="post-title">
            {item.title}
        </Link>

        <span className="post-date">{formatDate}</span>
        <p className="post-decription">
            {item.descr}
        </p>
        
        <div className="profile">
            <img  src={item.writer_photo} alt="" className="profile-img" />
            <span className="profile-name">{item.writer}</span>
        </div>
    
    </div>
    */


  return (
    <div style={{marginBottom: '5rem'}}>
      
      <section className="post container">
      
        { data &&
          data.map((item) => {
            const date = new Date(item.date);
            const formatDate = date.toDateString();
            const articleData = {
              img: item.img,
            };
            return (
              <div
                class="card post-box"
                key={item.id}
                data-tag={item.category_slug}
                style={{  }}
              >
                <img
                  src={articleData.img}
                  class="card-img-top mx-auto rounded responsive-img p-2"
                  alt="img"
                  style={{ height: '15rem', width: '100%', backgroundColor: 'white' }}
                />

                <div class="card-body">
                  <Link to={`/${item.slug}`} className="fs-4 fw-bold post-title" >
                    {item.title}
                  </Link>

                    <h6 class="card-subtitle mb-2 text-muted pt-2">
                      {" "}
                      {formatDate}{" "}
                    </h6>
                    <span class="badge bg-warning text-dark text-uppercase fw-bold">
                      {" "}
                      {item.category}{" "}
                    </span>

                  <p class="card-text post-decription">
                    {item.descr}
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <div className="profile">
                      <img
                        src={item.writer_photo}
                        alt="img"
                        className="profile-img"
                      />
                      <span className="profile-name">{item.writer}</span>
                    </div>
                  </small>
                </div>
              </div>
            );
          })
        }
        
      </section>
    </div>
  );
};

export default Posts;
