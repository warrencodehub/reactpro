export default function Description({ description }) {
  return (
    <div className="w3-row-padding">
      <div className="w3-col m12">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <p>
              <i>{description}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
