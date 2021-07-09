import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=22427711-b19a18a3295cca66ebd550536&q=wild+animals&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center py-4 text-danger fw-bold">
          Photo Gallery Using Pixabay API{" "}
        </h1>
        {isLoading ? (
          <center>
            <div
              className="spinner-border mt-4 "
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            ></div>
          </center>
        ) : (
          <div className="row mt-4 ">
            {images.map((image, i) => (
              <div className="col-md-4 mb-3 each-card" key={i}>
                <ImageCard key={image.id} image={image} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
