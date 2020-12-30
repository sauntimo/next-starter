import React, { ReactElement } from 'react';
import Link from 'next/link';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const IndexPage: React.FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout title="Home">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h1" component="h1">
            Next.js Project Starter
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Simple site to use as a base for more interesting projects
          </Typography>
          <Typography variant="body2" component="p">
            Built with Node, Typescript, Next.js, React and Material UI
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="https://github.com/sauntimo/next-starter">
            <a>
              <Button size="small">View Code</Button>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Button size="small">About</Button>
            </a>
          </Link>
        </CardActions>
      </Card>
    </Layout>
  );
};

export default IndexPage;
