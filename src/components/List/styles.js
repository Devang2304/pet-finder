import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    FormControl:{
        margin: theme.spacing(1),minWidth: 120,marginBottom:'30px',
    },
    Button:{
        marginBottom:'15px',marginTop:'15px',marginLeft:'30px' ,justifyContent:'center',alignItems: 'center',
    },
    SelectEmpty:{
        marginTop: theme.spacing(2),
    },
    loading:{
        height:'600px',display:'flex',justifyContent: 'center',alignItems: 'center',  
    },
    container:{
        padding:'25px',
    },
    marginBottom:{
        marginBottom: '30px',
    },
    list:{
        height:'75vh',overflow:'auto',
    },
}));