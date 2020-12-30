import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/core/Icon';
import Layout from '../components/layout/Layout';

const useStyles = makeStyles(() => createStyles({
  root: {
    minWidth: 275,
    margin: '2rem',
  },
  title: {
    fontSize: 48,
  },
  pos: {
    marginBottom: 12,
  },
}));

const AboutPage: React.FC = (): ReactElement => {
  const classes = useStyles();
  const router = useRouter();
  const toHome = () => {
    router.push('/');
  };

  return (
    <Layout title="Home">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h1" component="h1">
            Hey, I&apos;m Tim
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            web developer based in Bristol, UK
          </Typography>
          <Typography variant="body2" component="p">
            I like running, playing bass, photography, code and video games
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toHome}>Home</Button>
        </CardActions>
      </Card>
    </Layout>
  );
};
export default AboutPage;
