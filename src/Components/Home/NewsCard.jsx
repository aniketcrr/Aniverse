import ClockIcon from "../Utilities/ClockIcon"
import ReadMoreBtn from "../Utilities/ReadMoreBtn";
import ImageCard from "../Utilities/ImageCard";

function NewsCard(props) {


    return (
        <>

            <div class="container text-white my-4">
                <div class="row">
                    <div class="col-12 text-center ">

                        <div class="container text-white">
                            <div class="row">
                                <div class="col-5 text-center my-2 ">
                                   <ImageCard src={props.image} />
                                </div>

                                <div class="col-7 text-start my-2 ">

                                    <h3>{props.topic}</h3>

                                    <p class="text-secondary">
                                        <ClockIcon />
                                        {props.time}
                                    </p>

                                    <p class="text-white-50 d-none d-lg-block">{props.news}</p>
                                    <ReadMoreBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard;