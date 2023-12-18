import React from 'react'
import ClockIcon from '../Utilities/ClockIcon'

function LatestNews() {
    return (
        <>

            <div class="col-xl-4 text-start bg-dark bg-opacity-50 my-2 ">
                <h4>Latest News</h4>
                <hr />

                <div class="container text-white text-start my-4">
                    <div class="row">
                        <div class="col-12  ">

                            <div class="container">
                                <div class="row">
                                    <div class="col-12 my-2 ">
                                        <img class="ani-img"
                                            src="./news/Ultraman-Credits-Netflix-1-350x250.jpg" alt="" />
                                    </div>

                                    <div class="col-12 my-2 ">
                                        <h5>‘Darkness Heels’ Ultraman Spin-Off Anime Announced</h5>
                                        <p class="text-secondary">
                                            <ClockIcon />
                                            NOVEMBER 30, 2023
                                        </p>

                                        <p class="text-white-50">The "Darkness Heels" project shines a
                                            spotlight on some
                                            of the villainous characters from the Ultraman franchise,
                                            providing fans
                                            with...</p>

                                        <button class="btn read-more-btn btn-secondary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default LatestNews
