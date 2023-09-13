import React from "react";

const NewsItem=(props)=>{
    let { title, description, ImageUrl, newsUrl, date, author, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger">{source}
        </span>
          </div>
          <img src={!ImageUrl? "https://img.etimg.com/thumb/msid-101477355,width-1070,height-580,imgsize-28206,overlay-etmarkets/photo.jpg": ImageUrl}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
