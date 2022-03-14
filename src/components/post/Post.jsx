import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.picsum.photos/id/82/200/200.jpg?hmac=ATNAhTLN2dA0KmTzSE5D9XiPe3GMX8uwxpFlhU7U5OY"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
        voluptates neque unde itaque, eligendi mollitia accusamus recusandae
        reprehenderit impedit cumque ducimus ratione ex praesentium minima
        odiQuasi corrupti quis eum?Lorem, ipsum dolor sit amet consectetur
        adipisicin Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
        voluptates neque unde itaque, eligendi mollitia accusamus recusandae
        reprehenderit impedit cumque ducimus ratione ex praesentium minima
        odiQuasi corrupti quis eum?Lorem, ipsum dolor sit amet consectetur
        adipisicin
      </p>
    </div>
  );
}
