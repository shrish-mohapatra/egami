import React, { useState } from 'react';
// import {Row, Col} from 'antd';

function GalleryImage({image, index}) {
  const [hover, setHover] = useState(false)

  return (
      <div
        key={"gallery-img-div-"+index}
        className="gallery-img-div"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
          <img
            className="gallery-img"
            alt={image.title}
            key={"gallery-img-"+index}
            src={image.cloudURL}
            
          />
          <div className="img-meta">
            <p className="img-title">{hover ? image.title : ''}</p>
            <p className="img-author">{hover ? image.author : ''}</p>
          </div>
      </div>
  );
}

export default GalleryImage;