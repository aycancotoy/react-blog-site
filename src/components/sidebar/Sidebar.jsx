import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <span className="sidebarTitle">ABOUT ME</span>
      <div className="sidebarItem">
        <img
          src="https://i.picsum.photos/id/466/300/300.jpg?hmac=tHI02ySmr6L8izYV3EYcmNA0WopDkHqFzLTGC4BIc6Q"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          laboriosam laborum odit commodi porro nesciunt pariatur aspernatur
          error atque?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
