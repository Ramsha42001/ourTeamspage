import React from "react";
import Heading from "../components/Heading";
import {Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import Appcss from "../App.module.css";
import Navbar from "../components/Navbar";
import Coordinator from "../components/coordinators";
import HardwareDivisonHead from "../components/HardwareDivisonHead";
import SoftwareDivisonHead from "../components/SoftwareDomainHead";
import QuarksDivisonHead from "../components/QuarksDivisonHead";


  const y20Data={
    coordinators: [{name:"Prajwal Chittora",img:"coordinator1.png",link1:"https://www.linkedin.com/feed/"},{name:"Lakshya Setia",img:"coordinator2.png"}],
    hardware:[{name:"Lakshya Choudary",img:"HardwareDivisonHead1.png"},{name:"Prabhav Sharma",img:"HardwareDivisonHead2.png"}],
    software:[{name:"Kingshuk Ghosh",img:"SoftwareDivisonHead1.png"},{name:"Swatantra Jain",img:"SoftwareDivisonHead2.png"},{name:"Vaibhav Jaiswal",img:"SoftwareDivisonHead3.png"}],
    quarks:[{name:"Yash Pachauri",img:"QuarksDivisonHead1.png"},{name:"Bhavika Agarwal",img:"QuarksDivisonHead2.png"},{name:"Rajat Bothra",img:"QuarksDivisonHead3.png"}]
  }

  console.log(y20Data.coordinators[0].img);

  const y19Data={
    coordinators: [{name:".."},{name:".."}],
    hardware:[{name:".."},{name:".."}],
    software:[{name:".."},{name:".."},{name:".."}],
    quarks:[{name:".."},{name:".."},{name:".."}]
  }



// const y20Data={
//     image :path+"y20.png",
//     coordinators :[{name:"Prajwal Chittora",img: path+"y20-coordi1.png"},{name:"Prajwal Chittora",img: path+"y20-coordi1.png"}],
//     hardWareDivisonHead :[{name:"Kingshuk Ghosh", img: path+"y20-hardwareDivisonHead1.png"},{name:"Swatantra Jain", img: path+"y20-hardwareDivisonHead2.png"},{name:"Vaibhav Jaiswal", img: path+"y20-hardwareDivisonHead3.png"}],
//     quarksDivisonHead :[{name:"Yash Pachauri", img:path+"y20-quarksDivisonHead1.png"},{name:"Bhavika Agarwal", img:path+"y20-quarksDivisonHead2.png"},{name:"Rajat Bothra", img:path+"y20-quarksDivisonHead3.png"}]
// }

// console.group(y20Data.coordinators[0].name);

function Teams()
{
    return (<div className={Appcss.maindiv}>
        <Heading />
        <Navbar />
        <Switch>
        <Route path="/myteam/y20" exact>
        <div className={Appcss.mainImage}><img className={Appcss.mainImage1} src={require('../images/y20.png')} alt="main"/></div>
           
            <Coordinator 
            name1={y20Data.coordinators[0].name}
            name2={y20Data.coordinators[1].name}
            img1={y20Data.coordinators[0].img}
            img2={y20Data.coordinators[1].img}
            link1={y20Data.coordinators[0].img}
            />
            <HardwareDivisonHead 
            name1={y20Data.hardware[0].name}
            name2={y20Data.hardware[1].name}
            img1={y20Data.hardware[0].img}
            img2={y20Data.hardware[1].img}
            />
            <SoftwareDivisonHead 
            name1={y20Data.software[0].name}
            name2={y20Data.software[1].name}
            name3={y20Data.software[2].name}
            img1={y20Data.software[0].img}
            img2={y20Data.software[1].img}
            img3={y20Data.software[2].img}
            />
            <QuarksDivisonHead 
            name1={y20Data.quarks[0].name}
            name2={y20Data.quarks[1].name}
            name3={y20Data.quarks[2].name}
            img1={y20Data.quarks[0].img}
            img2={y20Data.quarks[1].img}
            img3={y20Data.quarks[2].img}
            />

        
        </Route>
        <Route path="/myteam/y19" exact>
        <div className={Appcss.mainImage}>
                
                </div>
             <Coordinator
             name1={y19Data.coordinators[0].name}
             name2={y19Data.coordinators[1].name}
             />
            <HardwareDivisonHead 
            name1={y19Data.hardware[0].name}
            name2={y19Data.hardware[1].name}/>
            <SoftwareDivisonHead 
            name1={y19Data.software[0].name}
            name2={y19Data.software[1].name}
            name3={y19Data.software[2].name}
            />
            <QuarksDivisonHead 
            name1={y19Data.quarks[0].name}
            name2={y19Data.quarks[1].name}
            name3={y19Data.quarks[2].name}
            />

        
        </Route>
        </Switch>

    </div>
    );
}

export default Teams;

