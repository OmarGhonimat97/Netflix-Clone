import Movie from "./Movie";

export default  function MovieList(props) {
    return (
        <>
            {
            props.trending.map((movie)=>{
                return (
                  <>
                    <Movie movie={movie} />
                  </>
                );
            })
            }
        </>
        
    )
}