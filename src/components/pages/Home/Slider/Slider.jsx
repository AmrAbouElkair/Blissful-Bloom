import { useSelector } from "react-redux";

const Slider = () => {
  const landingImages = useSelector(
    (state) => state.allImages.homePageImages.sliderImgs
  );

  const { mainImg, allImages: images } = landingImages;

  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={mainImg} className="d-block w-100" alt="..." />
        </div>
        {images.map((img) => (
          <div key={img.id} className="carousel-item" data-bs-interval="5000">
            <img src={img.img} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
