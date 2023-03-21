import MovieDetail from "./page/DetailPage/moviedetails";

function App() {
  const moviesinfo = [
    {
      id: 1,
      title: "Avengers: Infinity War",
      releaseyear: "2018",
      duration: "2h 23mins",
      viewers: "16+",
      rating: "9.0",
      intro:
        "The Avengers and their Super Hero allies must be willing to sacrifice  all attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      summary: {
        starting: "Scarlett Johson, Tesse Thompson, Robert Dowrey Jr.",
        createdby: "Anthony Russes, Joe Russo",
        genre: "Action, Adventure, Fanasy",
      },
    },
  ];
  return (
    <div className="App">
      {moviesinfo.map((data, i) => (
        <MovieDetail
          title={data.title}
          rating={data.rating}
          releaseyear={data.releaseyear}
          duration={data.duration}
          viewers={data.viewers}
          intro={data.intro}
          starting={data.summary.starting}
          createdby={data.summary.createdby}
          genre={data.summary.genre}
        />
      ))}
    </div>
  );
}

export default App;
