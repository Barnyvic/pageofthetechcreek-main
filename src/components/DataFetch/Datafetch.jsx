const Datafetch = ({ blogs, loading, title }) => {
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="DataContainer">
      <h2>{title}</h2>
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="Content" key={blog.id}>
              <h5>{blog.title}</h5>
              <p>{blog.year}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Datafetch;
