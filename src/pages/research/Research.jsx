import React from "react";
import slika1 from "../../assets/slika1.jpg";
import slika2 from "../../assets/slika2.jpg";
import slika3 from "../../assets/slika3.jpg";
import slika4 from "../../assets/slika4.jpg";
import HomeButton from "../../components/HomeButton";

const Research = () => {
  return (
    <>
      <div class="blur-overlay"></div>
      <div className="container">
        <HomeButton />
        <h1>RESEARCH</h1>
        <h2>UNCOVERING BURIED DUAL AGN</h2>
        <p>
          Dual AGN play an important role in our understanding of black hole
          growth, relationship between black hole fueling and galaxy
          interactions, and emission of gravitational waves. Even though
          expected to be ubiquitous, they are quite elusive. I undertook a large
          scale survey using the X-ray Chandra and infrared WISE archival data
          to search for specific signatures that dual AGN produce. Then, I
          studied the optical images of galaxies hosting potential dual AGN
          candidates with the goal of detecting tidal debris as evidence of
          ongoing interaction. This work resulted in detecting the first ever
          dual AGN in dwarf-dwarf galaxy mergers and the first ever early-stage
          minor merger with the dominant secondary AGN. These findings were
          published in the{" "}
          <a
            href="https://iopscience.iop.org/article/10.3847/1538-4357/aca1bb"
            target="_blank"
            rel="noreferrer"
          >
            Astrophysical Journal
          </a>{" "}
          and the{" "}
          <a
            href="https://arxiv.org/pdf/2310.09945"
            target="_blank"
            rel="noreferrer"
          >
            Open Journal of Astrophysics
          </a>
          . Current efforts include reduction and analysis of the brand new
          observations taken with Gemini telescope and the Very Large Array
          telescope that will shed new light on these intriguing objects.
        </p>
        <img src={slika1} alt="image1" />
        <h2>LOW MASS GALAXY INTERACTIONS TRIGGER BLACK HOLE ACCRETION</h2>
        <p>
          Recent discoveries of supermassive black holes billions of times more
          massive than the Sun, existing less than 700 million years after the
          Big Bang represent a major conundrum. How did these black holes grow
          so much so fast? To answer this question, one must first get a proper
          idea of the early Universe galaxy demographics. Various works suggest
          that overwhelming majority of galaxies at high redshifts were low-mass
          dwarfs, and that they dominated the merger rate per unit volume in the
          early Universe. Thus, in a simplified picture, one can imagine
          smaller, younger Universe filled with dwarf galaxies, undergoing
          multiple concurrent and consecutive mergers with other dwarfs. Could
          have these environmental conditions acted as evolutionary mechanisms
          for accelerated black hole growth?
        </p>
        <img src={slika2} alt="image2" />
        <p>
          It is hard to tell because the impact of low-mass galaxy interactions
          on black hole accretion has been completely unexplored until now. I
          compiled a new catalog of dwarf-dwarf galaxy pairs and dwarf galaxy
          groups residing in CANDELS fields. Then, I studied these dwarf systems
          using Chandra telescope and found six AGN, implying the AGN frequency
          of 10-15%. Then, a control sample of isolated dwarfs was constructed.
          The control sample dwarfs are identical in stellar mass and redshifts
          distribution to interacting sample and have the same depth of X-ray
          observations, with the only difference between the two being
          environment. However, the isolated control sample showed AGN frequency
          of only 1.5%. This work demonstrated, for the first time, that
          low-mass galaxy interactions are very efficient in triggering AGN, as
          they show 6-10 times higher AGN presence than their isolated
          counterparts. These findings were published in the{" "}
          <a
            href="https://iopscience.iop.org/article/10.3847/2041-8213/ad5345"
            target="_blank"
            rel="noreferrer"
          >
            Astrophysical Journal Letters
          </a>
          .
        </p>
        <img src={slika3} alt="image3" />
        <h2>
          EXPLORING THE LOW-MASS END OF LOW-MASS GALAXIES: AGN CONTENT AND
          TRIGGERING MECHANISMS
        </h2>
        <p>
          Low-mass end of low-mass galaxies is of particular interest for
          various fields of astronomy, but it is almost completely unexplored.
          These ultra low-mass galaxies can be viewed as local analogs of the
          first galaxies and used for studying the earliest stages of galaxy
          evolution, they represent viable sites for elusive intermediate-mass
          black holes, can be used as novel laboratories for dark matter
          searches, etc.
        </p>
        <p>
          I constructed a sample of a few thousand galaxies with stellar masses
          less than 5x108 Msol that is currently being examined at various
          wavelengths. The Chandra X-ray study resulted in discovering 22 new
          AGN, some of which residing in the least massive galaxies known to
          host AGN. One of the detected AGN exhibited properties in line a
          highly accreting intermediate mass black hole wieghing 40,000 Msol.
          This finding was published in the{" "}
          <a
            href="https://iopscience.iop.org/article/10.3847/1538-4357/ac56df"
            target="_blank"
            rel="noreferrer"
          >
            Astrophysical Journal
          </a>
          . I also performed studies of AGN frequency with respect to various
          galactic and cosmic parameters. I found that at the lowest-mass
          scales, there is no significant evolution of AGN frequency with
          respect to galactic stellar mass or redshift. However, ultra low-mass
          dwarfs hosting AGN significantly prefer denser environments. This
          effect is particularly noticeable in the least massive bin where all
          detected AGN reside in galaxies involved in ongoing mergers.
        </p>
        <h2>CHANDRA LOW-COUNT QUASAR (CLOCQ) SURVEY</h2>
        <p>
          Quasars have long represented a major puzzle, but now it is
          well-established that they are powered by violently accreting
          supermassive black holes. As such, they have a profound influence on
          our understanding of galaxy-black hole coevolution. X-ray observations
          played an instrumental role in investigating the nature of quasars,
          their environments, the mechanisms of quasar energetic out- flows, and
          their interaction with the intergalactic or intracluster medium.
          Several works compiled catalogs containing millions of quasars using
          different approaches. A significant fraction of these quasars have
          been observed in the past with Chandra, most of them serendipitously.
          However, most of them have not been analyzed in X-rays, and
          substantial work is required to fill this gap. Even though the main
          characteristics of quasars are high luminosities, due to their extreme
          distances, shallow X-ray coverage, or different environmental effects,
          quasars and their energetic features can sometimes appear faint in
          X-rays and go unnoticed. A careful large-scale, energy-dependent,
          low-count X-ray study of quasars would have the potential to reveal a
          plethora of intriguing but overlooked sources, opening novel avenues
          for understanding the fascinating nature of quasars.
        </p>
        <p>
          I am studying ~80,000 quasars with available X-ray data that haven't
          been carefully examined before. After completing a small fraction of
          data, I discovered a few intriguing source. The most notable one is a
          z=3 quasar with second longest jet ever observed and one of the most
          powerful hotspots. Even though the jet is extremely energetic, because
          of shallow X-ray coverage and extreme distance, it is detected with
          only 15 X-ray photons. We also find evidence for jet-induced positive
          feedback triggering the formation of a large number of hypermassive
          star clusters, some of them as massive as local dwarf galaxies. Paper
          presenting these findings is in immediate preparation.
        </p>
        <img src={slika4} alt="image4" />
      </div>
    </>
  );
};

export default Research;
