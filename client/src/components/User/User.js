import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
});

const User = ({ username, firstname, avatar }) => {

  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root} >
        <Link to={`/members/${username}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={avatar}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {firstname}
              </Typography>
              {/* {techstack.map(i => <Chip key={i} color='secondary' size="small" label={i} />)} */}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  )
}

export default User
