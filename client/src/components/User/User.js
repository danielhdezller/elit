import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const User = ({ username, firstname, familyname, techstack }) => {

  const classes = useStyles();

  return (
    <Grid item>
      <Card item className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://source.unsplash.com/1600x900/?portrait"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Link to={`/members/${username}`}>
              <Typography gutterBottom variant="h5" component="h2">
                {firstname} {familyname}
              </Typography>
            </Link>
            {techstack.map(i => <Chip color='secondary' size="small" label={i} />)}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default User
