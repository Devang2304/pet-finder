import React from "react";
// import Geolocation from "../Geolocation/geolocation";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select,Button } from "@material-ui/core";
import UploadImage from "../ImageUpload/UploadImage";
import useStyles from "./styles";
import { render } from "@testing-library/react";




const List =()=>{
    const classes = useStyles();
    // const location=Geolocation();
    return (
        
        <div className={classes.container}>
            <Typography variant="h5">If you know any stress dog if give your current location & dog's photo</Typography>
            <Button className={classes.Button} onClick={<UploadImage/>} variant="contained">Upload Image</Button>
            <Button className={classes.Button} variant="contained">Current Location</Button>
            {/* {
                location.loaded ? JSON.stringify(location) : "location is not available yet"
            } */}
            <Typography variant="h4">Stress dogs around you</Typography>
        </div>
    );
}

export default  List;