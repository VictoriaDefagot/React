import CardMovies from "./CardMovies";

function ContentRowMovies() {

    const cards = [{name: "Movies in database", number: 21, border: "primary", icon:"film"},
    {name: "Total awards", number: 79, border: "success", icon:"award"},
    {name: "Actors quantity", number: 49, border: "warning", icon:"user"}];

    return ( 
        <>

            <CardMovies cards={cards} />

        </>
    )
}

export default ContentRowMovies;