import "../component/MovieCard.css";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

function ShareIcons() {
  return (
    <>
      <div className="social-icons">
        <IoShareSocialSharp id="cursor" />
        <IoHeartDislikeOutline id="cursor" />
        <FaMessage id="cursor" />
      </div>
    </>
  );
}

export const MovieCard = ({
  name,
  actorNme,
  releaseDate,
  timeDuration,
  type,
  description,
  posterImg,
  backgroundImg,
}) => {
  return (
    <>
      <div
        className="container"
        style={{
          background: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="color-gradient">
          <div className="movie-detail-container">
            <div className="movie-details">
              <div>
                <img src={posterImg} width={"120px"} height={"170px"} />
              </div>
              <div className="actor-details">
                <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  {name}
                </span>

                <span style={{ display: "flex", gap: "5px", color: "#7a7aff" }}>
                  <span>{releaseDate}</span>
                  <span>{actorNme}</span>
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "1rem",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#1d1d1d",
                      padding: "3px 7px",
                      border: "1.5px solid #a5a5a5",
                      borderRadius: "5px",
                    }}
                  >
                    {timeDuration}
                  </span>
                  <span>{type}</span>
                </span>
              </div>
            </div>
            <div className="movie-desc">
              <p>{description}</p>
            </div>
            <div className="social">
              <ShareIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
