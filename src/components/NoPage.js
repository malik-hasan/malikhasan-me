import classes from './styles/NoPage.module.css'

import ninja from '../assets/ninja2.jpg';
import ImageCredit from '../ui/ImageCredit';

const NoPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.ninja}>
          <img src={ninja} alt='Sad Ninja' />
        </div>
        <h1>404 — Oops! There's nothing here.</h1>
      </div>
      <ImageCredit url="https://www.freepik.com/free-vector/cute-ninja-with-kunai-cartoon-flat-cartoon-style_12873500.htm#query=ninja%20cartoon&position=6&from_view=keyword&track=ais#position=6&query=ninja%20cartoon" />
    </>
  )
}

export default NoPage;
