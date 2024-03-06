import data from "../component/data.json";
import "../component/UpdateAllComponent.css";
import { ColorBox } from "./ColorBox";
import { MovieCard } from "./MovieCard";

const UpdateAllComponent = () => {
  console.log(data.movieData);
  return (
    <>
      <div className="h1Tag">
        <h1>Assignment-React-Props</h1>
      </div>

      <div className="color-box">
        {data.colorData.map((items, index) => {
          return (
            <ColorBox
              key={index}
              idName={items.id}
              colorName={items.name}
              bgColor={items.color}
            />
          );
        })}
      </div>

      <div className="movie-component">
        {data.movieData.map((items, index) => {
          return (
            <MovieCard
              key={index}
              name={items.name}
              actorNme={items.actor}
              releaseDate={items.releaseDate}
              timeDuration={items.timeDuration}
              type={items.type}
              description={items.description}
              posterImg={items.posterImage}
              backgroundImg={items.bgImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default UpdateAllComponent;
