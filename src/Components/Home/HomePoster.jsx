
function HomePoster(props) {
    return (
        <>
            <div className="col-xl-6 text-center my-2 ">
                <h1>{props.category}</h1>
                <div className="container text-white">
                    <div className="row">
                        {props.details.map((anime, index) => (
                            <div key={anime.id || index} className="col-xl-3 col-6 text-center my-2">
                                <img className="ani-img" src={anime.image} alt="" />
                                <p>{anime.name}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <button class="btn btn-secondary">View All {props.category}</button>
            </div>
        </>
    )
}


export default HomePoster;