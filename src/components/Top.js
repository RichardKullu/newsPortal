import React from "react";
import { useState, useEffect } from "react";

const Top = () => {
  const [data, setData] = useState("");
  const URL = "https://newsportal.herokuapp.com/api/categories";

  useEffect(() => {
    fetch(URL)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Error");
        }
        return resp.json();
      })
      .then((item) => {
        const temp = item.data.map((item) => {
          return {
            id: item.attributes.ctgy_id,
            name: item.attributes.ctgy_name,
            slug: item.attributes.ctgy_slug,
          };
        });
        setData(temp);
        console.log(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="home" id="home" style={{marginBottom: '1rem'}}>
        <div className="home-text container">
          <p className="home-title fw-bold">University of Delhi</p>
          <span className="home-subtitle">News Portal</span>
        </div>
      </section>

      <div class="post-filter container" >
            <span class="btn" data-toggle="portfilter" data-target="all">
                <div className="text-white">All</div>
            </span>
            { data && 
                data.map(item => {
                    return(
                        <span class="btn" data-toggle="portfilter" data-target={item.slug}>
                            <div className="text-white">{item.name}</div>
                        </span>
                    );
                })
            }
        </div>
      
    </div>
  );
};

export default Top;
