import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <>
      <div className="card shadow-lg rounded" style={{ width: "18rem" }}>
        <img src={image.webformatURL} className="card-img-top" />
        <div className="card-body">
          <p className="card-text fw-bold mb-2">Photo by {image.user}</p>
          <ul className="text-left list">
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>

          <div className="px-6 py-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="d-inline-block text-white px-3 py-1 mx-1 rounded mt-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
