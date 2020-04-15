import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,    
  },
  media: {
    height: 140,
    
  },
});

const CardRestaurant = styled(Card)`
  margin-bottom:8px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  width:328px;
`

const InfosContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

function CardsRestaurants (props) {  
    const classes = useStyles();
    return (
      <div>
      {props.restaurantList.map(restaurant =>{
        return(
          <CardRestaurant className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={restaurant.logoUrl}
              title={restaurant.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" color="primary">
                {restaurant.name}
              </Typography>
              <InfosContainer>
                <Typography variant="body2" color="textSecondary" component="p">
                  {restaurant.deliveryTime + " min"}
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {"Frete R$" + restaurant.shipping.toFixed(2)}
              </Typography>
              </InfosContainer>
            </CardContent>
          </CardActionArea>
        </CardRestaurant>
        )
      })}
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
      restaurantList: state.store.restaurantList

  }
};

export default connect(mapStateToProps)(CardsRestaurants)