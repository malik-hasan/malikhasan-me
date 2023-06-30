import { useState } from 'react';
import { Link } from 'react-router-dom'

import CustomSocialIcon from '../ui/CustomSocialIcon';
import ImageCredit from '../ui/ImageCredit';

import classes from './styles/Home.module.css'

import ninja from '../assets/code-ninja.jpg';
import credera from '../assets/credera.png';
import rocket from '../assets/rocket.png';

const Home = () => {
  const [spin, setSpin] = useState(false);

  return (
    <>
      <section className={classes.main}>
        <div className={classes.column}>
          <div className={classes.ninja}>
            <img 
              className={spin && classes.spin} 
              src={ninja} alt="Code Ninja" 
              onClick={() => setSpin(true)} 
              onAnimationEnd={() => setSpin(false)} 
            />
          </div>
          <Link to='/outer-space'>
            <div className={classes.rocket}>
              <img src={rocket} alt='Send ninja to space' />
            </div>
          </Link>
        </div>
        <div className={classes.text}>
          <h1 onClick={() => setSpin(true)}>Malik Hasan</h1>
          <p>Jack-of-all-trades full-stack developer, AWS cloud engineer, linguist</p>
          <p>Currently a Tech Solutions Consultant at
            <a href='https://credera.com/' target="_blank">
              <div className={classes.credera}>
                <img src={credera} alt="Credera" />
              </div>
            </a>
            and freelancer
          </p>
          <div className={classes.socials}>
            <CustomSocialIcon url='https://www.linkedin.com/in/malik-hasan/' />
            <CustomSocialIcon url='https://github.com/malik-hasan/' />
          </div>
        </div>
      </section>
      <ImageCredit url="https://www.freepik.com/free-vector/cute-ninja-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-isolated-flat_26259265.htm#query=ninja%20cartoon&position=0&from_view=keyword&track=ais" />
    </>
  );
}

export default Home;
