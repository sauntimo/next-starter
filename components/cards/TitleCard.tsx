import React, { ReactElement } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string,
  subtitle: string,
  body: string,
}

const useStyles = makeStyles(() => createStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: '2rem auto',
    padding: '0.5rem',
  },
  title: {
    fontSize: 48,
  },
  pos: {
    marginBottom: 12,
  },
}));

const TitleCard: React.FC<React.PropsWithChildren<Props>> = ({
  title, subtitle, body, children,
}: React.PropsWithChildren<Props>): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h1" component="h1">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {subtitle}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      {children !== undefined && (
        <CardActions>
          {children}
        </CardActions>
      )}
    </Card>
  );
};

export default TitleCard;
