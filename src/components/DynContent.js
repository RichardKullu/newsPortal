import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ArticleContext } from './Article';
import { YoutubeEmbed } from './YoutubeEmbed';
const parse = require("html-react-parser");

const DynContent = () => {
  const data = useContext(ArticleContext);
  useEffect(() => {
      console.log("DYANMIC")
      console.log(data);
  })
  return (
    <div>
        {
            data && data.map(item => {
                if(item.type === 'textContent') {
                    return(
                        item.text !== null && <div>
                            {parse(item.text)}
                        </div>
                    );
                } else {
                    return(
                        item.url !== null && <div>
                            <YoutubeEmbed url={item.url}/>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}

export default DynContent