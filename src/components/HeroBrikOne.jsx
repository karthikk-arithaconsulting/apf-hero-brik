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
                            <Title style={{ fontFamily: titleObj.style.font.family }} c={titleObj.style.font.color} fz={titleObj.style.font.size} fw={titleObj.style.font.weight} lh={titleObj.style.lineHeight} ta="left">
                               { titleObj.content.value}
                            </Title>
                        </div>

                        <div className="ChildContainerTextDiv">
                            <Text  style={{ fontFamily: textObj.style.font.family }} color={textObj.style.font.color} ta="left" fz={textObj.style.font.size} fw={textObj.style.font.weight} lh={textObj.style.lineHeight}> {textObj.content.value}</Text>
                        </div>
                        <div className="ParentButtonDiv">
                            <Button style={{ color: buttonObj.style.font.color, backgroundColor: buttonObj.style.backgroundColor ,fontFamily: buttonObj.style.font.family}}  size={buttonObj.style.font.size} variant="filled"  className="ChildButtonDiv">{buttonObj.content.value}</Button>
                        </div>
                    </div>
            
        </Box>
    </div>
    );
}
export default HeroOne;
