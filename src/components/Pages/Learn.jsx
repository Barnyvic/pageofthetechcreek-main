import Datafetch from "../DataFetch/Datafetch";
import { useState, useEffect } from "react";
import axios from "axios";

const Learn = () => {
  const [blogs, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="Learn-Main-Container">
      <Datafetch
        blogs={blogs}
        loading={loading}
        err={err}
        title={"All-Blogs"}
      />
    </div>
  );
};

export default Learn;
