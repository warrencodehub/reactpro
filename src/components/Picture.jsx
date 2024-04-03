export default function Picture({ picture_file_loc }) {
  return (
    <img
      src={picture_file_loc}
      className="w3-circle"
      style={{ height: "106px", width: "106px" }}
    ></img>
  );
}
