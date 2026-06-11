
import FAQ from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import { JobBoard } from "./JobBoardPreview";
import Testimonials from "./Review";
import AlumniShowcase from "./Showcase";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <AlumniShowcase></AlumniShowcase>
            <JobBoard></JobBoard>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;