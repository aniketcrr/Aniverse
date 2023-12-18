import React from 'react'
import ClockIcon from '../Utilities/ClockIcon'
import LatestNews from './LatestNews';

function News() {
    return (
    <>
            <div class="container text-white text-center">
                <div class="row">
                    <div class="col-12 text-start my-4">
                        <h2 class="fw-bold">‘It Seems Like I Forgot’ Gege’s Reply After Receiving Death Threats For Killing
                            Satoru Gojo</h2>
                        <p class="text-secondary pt-3">
                            <span class="svg-clock">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg>
                            </span>
                            NOVEMBER 30, 2023
                        </p>
                    </div>
                    <div class="col-12">
                        <img class="news-img" src="./news/Jujutsu-Kaisen-Season-2-6-350x250.jpg" alt="" />
                    </div>

                    <div class="col-12">

                        <div class="container pt-3 my-4">
                            <div class="row">

                                <div class="col-xl-8 col-md-12 text-start text-white-50 fs-5">
                                    <p class="pt-3 ">The second season of the popular anime series Jujutsu Kaisen has captured
                                        widespread
                                        attention
                                        recently. The initial episodes explored the backstory of fan-favorite character Gojo
                                        Satoru,
                                        much to
                                        the delight of passionate viewers.
                                    </p>

                                    <p class="pt-3 ">However, despite these appealing plotlines, a controversial development in
                                        the
                                        Jujutsu Kaisen manga
                                        has sparked intense debate among devoted fans.</p>

                                    <p class="pt-3 ">In the manga chapter, the villainous Ryomen Sukuna kills Gojo Satoru,
                                        unexpectedly
                                        eliminating the
                                        most beloved character of the series.</p>

                                    <p class="pt-3">Yet amidst all the turmoil, Akutami’s bold storytelling decision and
                                        willingness to upend expectations has also earned admiration in certain circles.</p>
                                </div>

                                <LatestNews />

                            </div>

                        </div>

                    </div>
                </div>
                </div>



            </>
            )
}

            export default News ;
