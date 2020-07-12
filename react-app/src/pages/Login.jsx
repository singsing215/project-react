import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import qs from "querystring"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '26ch',
    },
}));

export default function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        username:'',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) =>{
        console.log(values);
        console.log(values.username);
        console.log(values.password);
        fetch("/user/login",{
            method:"POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                "Accept":"application/json,text/plain,*/*"
            },
            body:qs.stringify({
                username:values.username,
                password:values.password
            })
        }).then(res => res.json())
        .then(data =>{
            console.log(data);
            
        })
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className="container" style={{marginTop:50}}>
                <form action="http://localhost:1337/user/login" method="POST" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="m-auto"><TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={values.username} onChange={handleChange('username')} /></div>
                    </div>
                    <div className="row">
                        <div className="m-auto">
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    name="password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:20}}>
                        <div className="m-auto" ><Button type="submit" variant="contained" color="primary" style={{ marginLeft: 9 }}>Login in</Button></div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}


