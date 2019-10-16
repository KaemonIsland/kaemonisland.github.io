import React, { Component } from 'react';
import styles from './AboutMe.module.scss';

import GridItem from '../../components/gridItem/GridItem';

import aidenDucks from '../../assets/images/aboutMe/aidenDucks.jpg';
import chelseyAiden from '../../assets/images/aboutMe/chelseyAidenPlayground.jpg';
import finnBaby from '../../assets/images/aboutMe/finnBaby.jpg';
import finnExcited from '../../assets/images/aboutMe/finnExcited.jpg';
import flamingoAiden from '../../assets/images/aboutMe/flamingoAiden.jpg';
import kaemonProfile from '../../assets/images/aboutMe/IMG_-pcu1ca.jpg';
import kaemonAloha from '../../assets/images/aboutMe/kaemonAloha.jpg';
import kaemonBow from '../../assets/images/aboutMe/kaemonBow.jpg';
import kaemonChelsey from '../../assets/images/aboutMe/kaemonChelsey.jpg';

class AboutMe extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <GridItem type='text'>
          <h2 className={styles.title}>About Me</h2>
          <p>Hello, I'm Kaemon, a <strong>Self Taught</strong> developer from Salt Lake City, UT! I'm known to approach every situation with an almost scary amount of optimism! Only because I am excited to learn something new. (even if I fail)
          <br /><br />
          When I'm not coding, you can find me playing video games with my wife, and spending time with my children.</p>
        </GridItem>
        <GridItem type='image' image={kaemonAloha} alt="Kaemon with leis" />
        <GridItem type='text'>
        <h2 className={styles.title}>What I know!</h2>
        <ul>
        <li>Javascript(React)</li>
        <li>CSS3 (SASS, Modular)</li>
        <li>HTML5</li>
        <li>Version Control(git)</li>
        </ul>
        </GridItem>
        <GridItem type='image' image={chelseyAiden} alt="Chelsey with Aiden" />
        <GridItem type='image' image={kaemonChelsey} alt="Kaemon and Chelsey" />
        <GridItem type='image' image={aidenDucks} alt="Aiden with ducks" />
        <GridItem type='image' image={finnBaby} alt="Finn" />
        <GridItem type='image' image={finnExcited} alt="Finn" />
        <GridItem type='image' image={kaemonProfile} alt="Kaemon Lovendahl" />
        <GridItem type='image' image={kaemonBow} alt="Kaemon with a bow" />
        <GridItem type='image' image={flamingoAiden} alt="Aiden with Flamingos" />
      </div>
    )
  }
}

export default AboutMe;