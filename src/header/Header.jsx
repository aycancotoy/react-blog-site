import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://i.picsum.photos/id/497/1920/1080.jpg?hmac=lCmyuUeNJbmkWXfeLeQ2SxRu3mII34_GIdUIBn3M6RQ" alt="" />
    </div>
  );
}
