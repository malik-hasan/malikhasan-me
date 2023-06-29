import classes from './styles/ImageCredit.module.css'

const ImageCredit = props => {
  return (
    <p className={classes.credit}>
      <a href={props.url}>
        Image by catalyststuff
      </a>
      on Freepik
    </p>
  );
}

export default ImageCredit;
