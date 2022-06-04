import CardMovies from "./CardMovies";

function ContentRowMovies() {

    const cards = [{name: "Movies in database", number: 21, border: "primary", icon:"film"},
    {name: "Total awards", number: 79, border: "success", icon:"award"},
    {name: "Actors quantity", number: 49, border: "warning", icon:"user"}];

    return ( 
        <>

            {/*<!-- Content Row Movies-->*/}

                <CardMovies cards={cards} />
            
            {/*<!-- Content Row Movies-->*/}

        </>
    )
}

export default ContentRowMovies;