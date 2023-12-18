import HomePoster from "./HomePoster"
import NewsCard from "./NewsCard";
import Trending from "./Trending";

function HomeCard() {

    const AnimeCard = [
        { name: "Jujutsu Kaisen", image: "./assets/Jujutsu-Kaisen-1.jpg" },
        { name: "Naruto", image: "./assets/Naruto.jpg" },
        { name: "Attack On Titan", image: "./assets/Attack-On-Titan.jpg" },
        { name: "One Piece", image: "./assets/OP.jpg" }
    ]

    const MangaCard = [
        { name: "Iruma Kun", image: "./manga/Iruma-Kun (1).jpg" },
        { name: "Lookism", image: "./manga/Lookism (1).jpg" },
        { name: "Dandadan", image: "./manga/Dandadan.jpg" },
        { name: "Kengan Omega", image: "./manga/Kengan-Omega.jpg" }
    ]



    const NewsInfo = {
        image: "./news/Ultraman-Credits-Netflix-1-350x250.jpg",
        topic: "‘Darkness Heels’ Ultraman Spin-Off Anime Announced",
        time: " NOVEMBER 30, 2023",
        news: "The Darkness Heels project shines a spotlight on some of the villainous characters from the Ultraman franchise, providing fans with..."
    }

    const TopAnime = {
        rank:  "01" , name : "One Piece" , image:"https://mangaplus.shueisha.co.jp/drm/title/100020/title_thumbnail_portrait_list/313426.jpg?key=68c2a4818b64984bc39fe8f34e0f3b84&duration=86400" 
    }


    return (
        <>
            <div className="container text-white">
                <div className="row">

                    <div className="container text-white">
                        <div className="row">
                            <HomePoster key="1" category="Anime" details={AnimeCard} />
                            <div className="dividing"></div>
                            <HomePoster key="2" category="Manga" details={MangaCard} />

                        </div>
                    </div>
                </div>
            </div>



            <div class="container text-white my-4">
                <div class="row">
                    <div class="col-xl-8 col-md-12 text-center my-2 ">


                        <NewsCard image={NewsInfo.image} topic={NewsInfo.topic} time={NewsInfo.time} news={NewsInfo.news} />


                    </div>


                    <div class="col-xl-4 text-start bg-dark bg-opacity-50 my-2 ">
                        <h4>Trending Now</h4>
                        <hr />

                        <div class="container text-white my-4">
                            <div class="row">
                            <Trending rank={TopAnime.rank} name= {TopAnime.name} image={TopAnime.image} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>

    )
}


export default HomeCard;