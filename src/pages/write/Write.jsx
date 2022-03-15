import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://i.picsum.photos/id/634/1600/900.jpg?hmac=TTJWiX8IB2FkP3T2LZrq4j4yjKjm36z-YrDTEOIRyRE"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
