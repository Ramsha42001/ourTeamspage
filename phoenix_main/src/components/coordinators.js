import React from "react";
import Details from "./Details";
import Appcss from "../App.module.css";

function Coordinator(props)
{
   
    return (
        <div className={Appcss.coordinatorsdiv}>
        <h1 className={Appcss.coordinatorsHeading}>Coordinators</h1>
            <div className={Appcss.coordinators}>
                <div className={Appcss.container}>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={`/images/${props.img1}`} alt="coordinator1"/>

                </div>                
                <Details
            //  name={coordinators.coordinator[0].name
            name={props.name1}
            link1={props.link1}
            />
                </div>
                </div>
               
                <div className={Appcss.container}>
                <div className={Appcss.imageDiv}>
                    <div className={Appcss.images}>
                <img  src={`/images/${props.img2}`}  alt="coordinator2"/>
                </div>
                
                <Details
                name={props.name2}
            //  name={coordinators.coordinator[1].name}
            />
            
                </div>
                </div>
                
        </div>
        </div>

    )
}

export default Coordinator;