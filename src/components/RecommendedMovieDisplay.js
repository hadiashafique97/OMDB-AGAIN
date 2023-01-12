// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import Movie from "./Movie";
// You can also destructure your props directly from the parameter list
export default function RecommendedMovieDisplay({ recommendedMovies }) {
  //function to return loaded JSX
  console.log("recommendedMovies = ", recommendedMovies)
  const loaded = () => {
    return (
      <>
        <h1>Recommended Movies</h1>
        <div className="recommendedMoviesDisplay">
          {recommendedMovies.Search.map((element, index) => {
            return (
              <Movie element={element} key={index}/>
            )
            

          }
          )
          }
        </div>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movies to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return recommendedMovies ? loaded() : loading();
};
