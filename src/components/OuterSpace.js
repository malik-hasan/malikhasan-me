import { Link } from "react-router-dom";

import ImageCredit from '../ui/ImageCredit';

import classes from './styles/OuterSpace.module.css'

import home from '../assets/home.png'
import ninja from '../assets/ninja2.jpg';

const OuterSpace = props => {
  return (
    <>
      <div className={`${classes.container} ${!props.error && classes.space}`}>
      {/* <img styles={{'object-fit': 'cover'}} src={space} alt='Outer Space' /> */}
        <div className={classes.ninja}>
          <img src={ninja} alt='Sad Ninja' />
        </div>
        {props.error && <h1>404 — Oops! There's nothing here.</h1>}
        <Link to="/">
          <div className={`${classes.home} ${!props.error && classes.nav}`}>
            <img src={home} alt='Go back home' />
          </div>
        </Link>
      </div>
      <ImageCredit url="https://www.freepik.com/free-vector/cute-ninja-with-kunai-cartoon-flat-cartoon-style_12873500.htm#query=ninja%20cartoon&position=6&from_view=keyword&track=ais#position=6&query=ninja%20cartoon" />
    </>
  )
}

export default OuterSpace;
