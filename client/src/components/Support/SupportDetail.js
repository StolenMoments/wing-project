import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import YouTube from 'react-youtube';
import API_URL from "../Constants/API_URL";

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center'
    },
    body: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        textAlign: 'center',
        width: '1000px',
        display: 'block'
    },
    title: {
        textAlign: 'center'
    },
    supportInfo: {
        display: 'flex',
        float: 'left',
    },
    text: {
        display: 'block',
        justifyContent: 'center',
    }
}));

function SupportDetail({match}) {
    const classes = useStyles();
    const [artist, setArtist] = useState([]);

    axios.get(API_URL + '/api/artist/' + match.params.artistId)
    .then(res => setArtist(res.data));

    return (
        <div>
            <h2 className={classes.title}>Support Detail Page</h2>
            <br/>
            <h3 className={classes.title}>{artist.artistName}</h3>
            <div className={classes.body}>
                <div className={classes.supportInfo}>
                    <YouTube videoId={artist.video} height='390' width='640'/>
                    <div className={classes.text}>
                        <h2>이번 달 후원 상황</h2>
                        <h3>180,000원 후원</h3>
                        <h3>14명의 서포터</h3>
                        <h2>후원 QR코드</h2>
                        <Link to={`/support/payment/${artist.artistId}`}>
                            <Button variant="contained">
                                후원하기
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportDetail;
