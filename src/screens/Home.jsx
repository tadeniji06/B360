import Brands from "../components/Brands";
import Building from "../components/Building";
import Core from "../components/Core";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import OurDiff from "../components/OurDiff";
import Ready from "../components/Ready";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Building />
      {/* <OurDiff /> */}
      <WhyUs />
      <Brands />
      <Core />
      <GetStarted />
      <Testimonials />
      {/* <Ready /> */}
    </div>
  );
};
export default Home;
