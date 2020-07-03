import React, { Component } from 'react';
import { CardOrderProgress, ContentCardOrder, ImgClock } from './styles';
import { Typography } from '@material-ui/core';

class CardOrder extends Component {
    render(){
        return(
            <div>
                <CardOrderProgress>
                    <ImgClock src={require('../../images/clock.svg')} class="clock" />
                    <ContentCardOrder>                        
                        <Typography variant="subtitle1" color="secondary">Pedido em Andamento</Typography>
                        <Typography variant="subtitle1">Bullguer Vila Madalena</Typography>
                        <Typography variant="h6">SUBTOTAL R$67,00</Typography>
                    </ContentCardOrder>                    
                </CardOrderProgress>
            </div>

        )
    }
}

export default CardOrder;