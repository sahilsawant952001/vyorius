import React from "react";
import classes from "../Body/Body.module.css";
import { NavLink, useHistory } from "react-router-dom";

function Body()
{
    const history = useHistory();

    function onClickLaunch()
    {
        history.push('/Launch Vyorius')
    }

    function onClickKnow()
    {
        history.push('/Know More')
    }

    return <div className={classes.main}>
                <div>
                    <div class="row">
                        <div class="col">
                            <div className={classes.content}>
                                <h6 className={classes.col}>CONNECTING THE DISCONNECTED</h6>
                                <h1 className={classes.fontStyle}>
                                    <span className={classes.col}>Vyorius</span> brings unmanned robots <span className={classes.col}>together</span>,<br/> wherever they are
                                </h1>
                                <h6 style={{margin:"5% 0",fontFamily:"Montserrat, sans-serif;"}}>
                                    With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating.
                                </h6>
                                <button onClick={onClickLaunch} type="button" class="btn btn-secondary btn-lg" style={{backgroundColor:"#ff914d",borderColor:"#ff914d",margin:"0 2% 2% 0",height:"65px",width:"250px"}}>Launch Vyorius</button>
                                <button onClick={onClickKnow} type="button" class="btn btn-outline-light btn-lg" style={{color:"#ff914d",borderColor:"#ff914d",margin:"0 0 2% 2%",height:"65px",width:"250px"}}>Learn More</button>
                                <p>Need to order ?<NavLink to="/Get Started">Get Started</NavLink></p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="img3.png" className={classes.imgstyle} alt="vyorius"/>
                        </div>
                    </div>
                </div>
            </div>
}

export default Body;