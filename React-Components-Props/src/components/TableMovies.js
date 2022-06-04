import TableRows from './TableRows';

function TableMovies(){

    const rowItems = ["Title", "Length", "Rating", "Genre", "Awards"];
    const movies = [{name: "Billy Elliot", length: 120, rating: 5.0, genre: "Drama", awards: 2},
    {name: "Inception", length: 135, rating: 4.8, genre: "Drama", awards: 3},
    {name: "Infinity War", length: 150, rating: 6.0, genre: "Science Fiction", awards: 5}];

    return(
        <>
        
        <TableRows rowItems={rowItems} movies={movies} />
        
        </>
    )
}

export default TableMovies;