import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from '../Shoes.json';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        width: theme.spacing(35),
        height: theme.spacing(40),
      },
    },
    img: {
        margin: theme.spacing(6),
        width: 180,
        height: 120
        
    },
    heading:{
        margin: theme.spacing(3),
    }
  }));

const Product = () => {

    const classes = useStyles();

    return (
        
        <div>
            <h1 className={classes.heading}>Welcome to Product</h1>
            
            <div className={classes.root}>
            
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    // console.log(shoe)
                    return(
                        <Paper elevation={2}>
                        <Link key={keyName}
                            className="link"
                            to={`/product/${keyName}`}
                        >
                            <h2 className={classes.heading}>{shoe.name}</h2>
                            <img className={classes.img} src={shoe.img} alt="shoe" height={150}/>
                        </Link> 
                        </Paper>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Product
