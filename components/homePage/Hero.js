import Image from "next/image";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profilepic.png"
          alt="profile-pic"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ty</h1>
      <p>
        I blog about web development - especially Full Stack development with
        React, Next and Node
      </p>
    </section>
  );
}

export default Hero;
