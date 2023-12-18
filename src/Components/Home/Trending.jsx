
function Trending(props) {

    return (
        <>
            <div class="col-12 text-center my-4">
                <div class="container text-white ">
                    <div class="row align-items-center">
                        <div class="col-2 text-center ">
                            <h1 class="fw-bold align-middle">{props.rank}</h1>
                            <div class="ranking align-middle"></div>
                        </div>
                        <div class="col-4 text-center ">
                            <img class="top-ani-img rounded"
                                src={props.image}
                                alt="" />
                        </div>
                        <div class="col-6 text-start text-white">
                            <h5 class="fw-bold">{props.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending;