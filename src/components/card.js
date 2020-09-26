import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import './card.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({title,  url,image}) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} cardbody` }>
      <CardActionArea>
        <a href={url}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>
  );
}