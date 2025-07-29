import React from "react";
import Links from './Links';

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>

       {prop.bio && prop.bio.length > 0 ? <p>{prop.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {prop.links.github} linkedin = {prop.links.linkedin}/>
    </div>
  );
}

export default About;
