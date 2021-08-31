import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //require a loader
function Slider() {
    return (
        <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
            <Carousel 
                autoplay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
            >
            <div>
                <img loading="lazy" src="/images/slider-1.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/images/slider-2.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/images/slider-3.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
            </div>
            </Carousel>
        </section>
    )
}

export default Slider;
