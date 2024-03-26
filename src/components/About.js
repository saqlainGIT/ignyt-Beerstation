import React, { useState, useEffect } from "react";

const About = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetCounts = [20, 78000, 190, 35];
  const duration = 3; // in seconds
  const easing = (t) => t; // linear easing function

  useEffect(() => {
    const startTimes = counts.map(() => performance.now());
    const endTimes = startTimes.map((startTime) => startTime + duration * 1000);

    const updateCounts = () => {
      const newCounts = counts.map((currentCount, index) => {
        const startTime = startTimes[index];
        const endTime = endTimes[index];
        const now = performance.now();
        const timeElapsed = Math.min(
          1,
          (now - startTime) / (endTime - startTime)
        );
        const easedProgress = easing(timeElapsed);
        const targetCount = targetCounts[index];
        return Math.floor(easedProgress * targetCount);
      });
      setCounts(newCounts);

      if (
        counts.some((currentCount, index) => {
          const endTime = endTimes[index];
          return performance.now() < endTime;
        })
      ) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);

    return () => {
      // Cleanup function
      cancelAnimationFrame(updateCounts);
    };
  }, [counts, targetCounts]);

  return (
    <div id="about">
      <br />
      <hr />
      <br />
      <br />

      <span className="secondheading">
        <h1>Ignyt-BeerStation</h1>
      </span>
      <br />
      <p className="para">
        "Ignyt - The Beer Lounge is more than just a venue; it's a destination
        for beer enthusiasts seeking an extraordinary experience. Nestled in the
        heart of a bustling city, it stands as an oasis for those who appreciate
        the craftsmanship and artistry behind every brew. With its inviting
        ambiance and carefully curated selection of both local favorites and
        international delights, Ignyt beckons patrons to embark on a journey of
        exploration through the diverse world of beer. Whether savoring a crisp
        IPA, indulging in a rich stout, or discovering a refreshing wheat beer,
        every sip at Ignyt promises to tantalize the taste buds and ignite a
        passion for the perfect pint. Beyond the libations, Ignyt fosters a
        sense of community, where like-minded individuals can gather to share
        stories, swap recommendations, and forge lasting connections over their
        mutual love for all things beer. Step inside, and let Ignyt - The Beer
        Lounge - elevate your beer-drinking experience to new heights."
      </p>

      <br />
      {/* 
      <div className="abouttext">
        <p id="MyNumber">{counts[0]}</p>
        <p>Years of Experience</p>
      </div>

      <div className="abouttext">
        <p id="MyNumber2">{counts[1]}</p>
        <p>Happy customers!</p>
      </div>

      <div className="abouttext">
        <p id="MyNumber3">{counts[2]}</p>
        <p>Menus</p>
      </div>

      <div className="abouttext">
        <p id="MyNumber4">{counts[3]}</p>
        <p>Staffs</p>
      </div> */}
      <br />
      <br />
    </div>
  );
};
export default About;
