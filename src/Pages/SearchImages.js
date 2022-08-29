import React, { useState } from "react";
import { imageApi } from "../lib/Unsplashapi";
import Navigation from "../Component/navigation/Navigation";
import ImageGallary from "../Component/ImageGallary";
import Loading from "../Component/Loading/Loading";
import ImageContainer from "../Component/redux/imageContainer";
// import { useDispatch } from "react-redux";
// import { fetchImageRequest } from "../Component/redux/images/imageAction"
// import { fetchImageRequest } from '../Component/redux/images/imageAction.js'
  

function SearchBar(props){

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  // const dispatch = useDispatch();

  const handelSearch = (e) => {
    // debugger
    e.preventDefault();
    setIsLoading(true);
    imageApi(query)
      .then((responce) => {
        setImages(responce);
        // dispatch(fetchImageRequest(responce.data.results));
      })
      .catch((error) => {
        setErrorMessage(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Navigation />
      <ImageContainer/>
      <div className="container">
        <div className="search-box">
          <h2>Search Images</h2>
          <div className="search">
            <div className="search-field">
              <form onSubmit={(e) => handelSearch(e)}>
                <input
                  type="text"
                  placeholder="Search Images here ..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  // onKeyPress={e => e.key === 'Enter' && handelSearch()}
                />
              </form>
            </div>
          </div>
        </div>
        {isLoading ? <Loading /> : <ImageGallary gallaryImage={images} />}
        {errorMessage && <div className="error">{errorMessage}</div>}
       
      </div>
    </>
  );
}

export default SearchBar;
