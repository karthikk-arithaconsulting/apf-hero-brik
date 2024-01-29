import React from "react";
import { Box,Title,Text,Button} from "@apf/core";
import "@apf/core/dist/style.css";
import "./HeroBrikOne.css";
function HeroOne(props){
    // eslint-disable-next-line react/prop-types
    const backgroundImg = props.data.data.find((item) => item.content.type === "image" && item.content.for === "background");
    // eslint-disable-next-line react/prop-types
    const hoverImg = props.data.data.find((item) => item.content.type === "image" && item.content.for === "hover");
    // eslint-disable-next-line react/prop-types
    const titleObj = props.data.data.find((item) => item.content.type === "title");
    // eslint-disable-next-line react/prop-types
    const textObj = props.data.data.find((item) => item.content.type === "text");
    // eslint-disable-next-line react/prop-types
    const buttonObj = props.data.data.find((item) => item.content.type === "button");
    return(
    <div className="containor">
        <Box>
            <img src={backgroundImg.content.link}  className="HeroImageDiv"></img>
                    <div className="ChildImage">
                        <img src={hoverImg.content.link} className="ChildImageTag"></img>
                        
                    </div>
                    <div className="ParentContainerContentDiv">
                        <div className="ParentTitleDiv">
                            <Title c="white" fw="900" size="55" ta="left">
                               { titleObj.content.value}
                            </Title>
                        </div>

                        <div className="ChildContainerTextDiv">
                            <Text size="xl"color="white" ta="left" fw="500"> {textObj.content.value}</Text>
                        </div>
                        <div className="ParentButtonDiv">
                            <Button size="md" variant="default" color="white" className="ChildButtonDiv">{buttonObj.content.value}</Button>
                        </div>
                    </div>
            
        </Box>
    </div>
    );
}
export default HeroOne;
