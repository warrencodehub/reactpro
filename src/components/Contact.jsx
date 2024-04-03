export default function Contact({ contactno, email }) {
  return (
    <div className="w3-card w3-round w3-white ">
      <div className="w3-container">
        <p>Contact</p>
        <p className="w3-small">{contactno}</p>
        <p className="w3-small">{email}</p>
      </div>
    </div>
  );
}
