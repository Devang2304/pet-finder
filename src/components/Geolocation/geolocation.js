import React,{useEffect, useState} from "react";
const Geolocation=()=>{
    const [location,setLocation]=useState({
        loaded:false,
        coordinates:{lat:"",lng:""}
    });

    const onSucess=location=>{
        setLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            },
        });
    };

    const onError=error=>{
        setLocation({
            loaded:true,
            error:{
                message:error.message,
            },
        });
    }

    useEffect(()=>{
        if( !("geolocation" in navigator)){
           onError({
            code:0,
            message:"Geolocation is not supported",
            });
        }
    navigator.geolocation.getCurrentPosition(onSucess,onError); 
    },[]);
    return location.loaded ? JSON.stringify(location) : "location is not available yet";
};
export default Geolocation;