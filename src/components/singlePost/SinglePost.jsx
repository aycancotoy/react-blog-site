import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.picsum.photos/id/630/1400/500.jpg?hmac=Xk9LETXpFnBDikWqDmyEOPUNbM681mWHYjeWlexXHhM"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Aycan</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eveniet
          vel debitis eligendi quidem facere nihil aut laboriosam, amet
          reiciendis soluta, quis aperiam, assumenda impedit veritatis tempore
          expedita sint quam? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nisi eveniet vel debitis eligendi quidem facere
          nihil aut laboriosam, amet reiciendis soluta, quis aperiam, assumenda
          impedit veritatis tempore expedita sint quam? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Nisi eveniet vel debitis eligendi
          quidem facere nihil aut laboriosam, amet reiciendis soluta, quis
          aperiam, assumenda impedit veritatis tempore expedita sint quam? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nisi eveniet vel
          debitis eligendi quidem facere nihil aut laboriosam, amet reiciendis
          soluta, quis aperiam, assumenda impedit veritatis tempore expedita
          sint quam?
        </p>
      </div>
    </div>
  );
}
