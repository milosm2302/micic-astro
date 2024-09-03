import React from "react";
import HomeButton from "../../components/HomeButton";
import marko from "../../assets/marko.jpg";
const About = () => {
  return (
    <>
      <div className="blur-overlay"></div>
      <div className="container">
        <HomeButton />

        <div className="img-container">
          <p>
            My name is Marko Mićić and I am a Dodge Family Postdoctoral Fellow
            at the Department of Physics and Astronomy at the University of
            Oklahoma. I am an observational astrophysicist and I am mostly
            interested in exploring the coevolution of galaxies and black holes
            at the lowest mass scales.
          </p>
          <img src={marko} alt="" />
        </div>
        <p>
          I am studying the AGN content, AGN triggering mechanisms, and star
          formation processes in the least massive galaxies. I am trying to
          identify the key factors that influence black hole accretion, bursts
          of star formation, and star formation quenching. I am also
          investigating how galaxy interactions and mergers affect the evolution
          of supermassive black holes. I am particularly interested in
          dwarf-dwarf galaxy mergers, where two dwarf galaxies are in the
          process of collision, and extreme minor mergers, where a dwarf galaxy
          is interacting with many times larger massive galaxy. Additionally, I
          spent substantial time surveying various astronomical databases in
          search of buried dual AGN. This effort resulted in discovering the
          first ever dwarf-dwarf merger related dual AGN and the first ever
          early-stage minor merger with a dominant secondary AGN. Recently, I
          started a Chandra LOw-Count Quasar (CLOCQ) Survey, an attempt to
          leverage the vast Chandra database to explore cloaked quasars, dual
          quasars, quasars residing in X-ray haloes, quasar- associated
          energetic features such as jets and hotspots, and quasar-activity
          induced feedback on the ambient medium.
        </p>
        <p>
          In my research, I am using multiwavelength data from various ground-
          and space-based telescopes. I am mostly working with Chandra, Hubble,
          James Webb, WISE, VLA, and Gemini to tackle the mysteries of black
          holes.
        </p>
      </div>
    </>
  );
};

export default About;
