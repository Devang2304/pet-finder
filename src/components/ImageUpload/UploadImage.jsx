import React,{useState} from "react";
import useStyles from "../List/styles";

export default function UploadImage(){
    const [File,setFile]=useState();
    const classes = useStyles();
    function handleChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (

        <div className="ImageUpload">
         <form action="#">
        <input type="file"  onChange={handleChange} />
        <img src={File} />
        </form>
        </div>
    );
}