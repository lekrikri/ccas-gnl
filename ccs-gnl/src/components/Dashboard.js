import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import AutorenewSharpIcon from '@material-ui/icons/AutorenewSharp';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import '../App.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        padding: '25px 40px 0px 40px',
    },
    left: {
        marginTop: '15px',
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#261f68',
        display: 'flex',
        alignItems: 'center',
    },
    right: {
        marginTop: '20px',
        padding: theme.spacing(1.2),
        textAlign: 'center',
        color: '#261f68',
        display: 'flex',
    },

    update: {
        color: '#261f68',
        marginTop: '25px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
    },
    sales: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#261f68',
        marginTop: '20px',
        height: '100%',
    },
    approvals: {
        color: '#261f68',
        display: 'flex',
        justify: "flex-start",
        alignItems: "center",
    },
    icon: {
        color: 'white',
        fontSize: 'large',
        display: 'flex',
        justify: 'flex-start',

    },
    one: {
        textAlign: "left",
    },
    two: {
        textAlign: "left",
        fontSize: 13,
    },
    appr: {
        marginTop: '15px',
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           
        </div >
    );
}