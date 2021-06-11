import React, { useEffect, useState } from "react";
import TodoCard from "../TodoCard/TodoCard";

const Home = () => {
  const [information, setInformation] = useState([]);
  const [page, setPage] = useState("1");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setInformation(data);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const { per_page, total, total_pages } = information;

  return (
    <div className="container mx-auto">
      <h2 className="pt-5">Welcome to the todo list</h2>
      <div>
        <p>Total page : {total_pages}</p>
        <p>Total person : {total}</p>
        <p>Per page :  {per_page}</p>
        <p>Current page number : {page}</p>
      </div>
      <div className="mx-3">
        <strong>Pages</strong>
        <span
          style={{ cursor: "pointer" }}
          className="mx-3 bg-secondary p-2"
          onClick={() => setPage("1")}
        >
          1
        </span>
        <span
          style={{ cursor: "pointer" }}
          className="bg-secondary p-2"
          onClick={() => setPage("2")}
        >
          2
        </span>
      </div>
      {isLoading ? (
        <h3 className="py-5">Loading...</h3>
      ) : (
        <div className="row">
          {information.data?.map((info) => (
            <TodoCard key={info.id} information={info}></TodoCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
