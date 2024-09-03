import React from "react";
import HomeButton from "../../components/HomeButton";

const Projects = () => {
  return (
    <>
      <div class="blur-overlay"></div>
      <div className="container">
        <HomeButton />
        <h2>IN THE MEDIA</h2>
        <p>
          Discovery of the first ever dual AGN in dwarf-dwarf galaxy mergers
          <br />
          <a
            href="https://chandra.harvard.edu/press/23_releases/press_022223.html"
            target="_blank"
            rel="noreferrer"
          >
            Chandra
          </a>
          <br />
          <a
            href="https://www.nasa.gov/image-article/nasas-chandra-discovers-giant-black-holes-collision-course/"
            target="_blank"
            rel="noreferrer"
          >
            NASA
          </a>
          <br />
          <a
            href="https://www.scientificamerican.com/article/colliding-dwarf-galaxies-astronomers-glimpse-of-early-universe/"
            target="_blank"
            rel="noreferrer"
          >
            Scientific American
          </a>
          <br />
          Dwarf-dwarf mergers trigger black hole accretion <br />
          <a
            href="https://www.nature.com/articles/d41586-024-01703-3"
            target="_blank"
            rel="noreferrer"
          >
            Nature
          </a>
        </p>
        <h2>UNDERGRADUATE RESEARCH OPPORTUNITIES </h2>

        <list>
          <ol>
            <li>
              Exploring the low-mass end of low-mass galaxies: AGN frequency and
              triggering mechanisms
            </li>
            <li>
              Exploring the low-mass end of low-mass galaxies: What drives
              bursts of star formation and what quenches it?{" "}
            </li>
            <li>
              Reduction of Gemini and VLA observations: Shedding new light on
              the first dwarf-dwarf merger dual AGN
            </li>
            <li>
              Reduction of Gemini observations: AGN from the least massive
              galaxies
            </li>
            <li>
              Feeding the little monsters: Investigating rapid black hole growth
              mechanisms using extreme minor merger secondary AGN
            </li>
            <li>Chandra Low-Count Quasar (CLOCQ) Survey</li>
          </ol>
        </list>
        <h2>STUDENTS ADVISED</h2>
        <ul>
          <li>
            Olivia Holmes (2021-2024), currently PhD student at Purdue
            University
          </li>
          <li>
            Brenna Wells (2021-2024), currently PhD student at Duke University
          </li>
          <li>
            Jackson Eames (2023-2024), currently senior at University of Alabama
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
