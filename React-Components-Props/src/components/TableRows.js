function TableRows(props){
    return(
        <>
        
        <div className="table">
            {props.rowItems.map((rowItem, i) =>   
                <div key={rowItem + i} className="table-columns">{rowItem}</div>
            )}
        </div>

        <div className="table-row">
            {props.movies.map((movie, i) => 
                <div key={movie.name + i} >{movie.name}</div>
            )}
         </div>

        </>
    )
}

export default TableRows;