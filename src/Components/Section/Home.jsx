
import FAQ from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Review";
import AlumniShowcase from "./Showcase";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <AlumniShowcase></AlumniShowcase>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;