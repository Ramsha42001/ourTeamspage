import React from "react";
import Appcss from "../App.module.css";
import Details from "./Details";


function HardwareDivisonHead(props)
{
    return(
        <div>
        <h1 className={Appcss.coordinatorsHeading}>Hardware Divison Head</h1>
            <div className={Appcss.coordinators}>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={`/images/${props.img1}`} alt="hardwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
            />
                </div>

                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={`/images/${props.img2}`} alt="hardwareHead2"/>
                </div>
                
                <Details
             name={props.name2}
            />
                </div>
        </div>
        </div>
    )
}

export default HardwareDivisonHead;