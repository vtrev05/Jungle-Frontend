import React from "react";
import Hero from "../components/ui/Hero";
import Main from "../components/ui/Main";

const Home = () => {
    return (
        <div data-testid="Homerender">
           <Hero></Hero>
           <Main></Main>
        </div>
    );
};

export default Home;