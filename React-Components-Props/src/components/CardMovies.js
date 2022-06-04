
function CardMovies(props){
    return(
        <>

        <div className="row">

        {props.cards.map((card, i) => 

                <div key={card + i} className="col-md-4 mb-4">
                    <div key={card.border + i} className={`card border-left-${card.border} shadow h-100 py-2`}>

                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div key={card.name + i} className="text-xs font-weight-bold text-primary text-uppercase mb-1">{card.name}</div>
                                    <div key={card.number + i} className="h5 mb-0 font-weight-bold text-gray-800">{card.number}</div>
                                </div>
                                <div className="col-auto">
                                <i key={card.icon + i} className={`fas fa-${card.icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        )}

        </div>

        </>
    )
}

export default CardMovies;