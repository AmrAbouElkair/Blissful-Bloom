const Loading = () => {
  return (
    <div className="d-flex justify-content-center w-100 text-primary my-5">
      <div
        className="spinner-border fs-3"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
