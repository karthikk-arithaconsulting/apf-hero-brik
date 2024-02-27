/* eslint-disable react/prop-types */
import React from "react";
import { Title,Text,Button} from "@apf/core";
import "@apf/core/dist/style.css";
import "./HeroBrikOne.css";
function HeroOne(props){
    const backgroundImg = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "background");
    const hoverImg = props.data.data.find((item) => item.content.type === "img" && item.content.for === "image one");
    const titleObj = props.data.data.find((item) => item.content.type === "title");
    const textObj = props.data.data.find((item) => item.content.type === "text");
    const buttonObj = props.data.data.find((item) => item.content.type === "button");
    const handleButtonClick = () => {
        window.open(buttonObj?.content?.link, buttonObj?.content?.target);
      };
    return(
    <div className="Hero-Containor" style={{ backgroundColor: props?.data?.style?.backgroundColor }}>
        {backgroundImg && backgroundImg?.display === "block" &&<div className="Hero-Image-Containor" style={backgroundImg && backgroundImg.content.src? null :  {backgroundColor: `${backgroundImg}` }}>
                {backgroundImg && backgroundImg.content.src &&<img src={backgroundImg.content.src} className="HeroImageDiv"></img>}
            </div>}
        <div className="Hero-content-container">
            <div className={hoverImg?.display === "block" ? "child-container-a" : "child-container-a-1"} >               
            {titleObj && titleObj?.display === "block" &&<div className="hero-title">
                    <Title c={titleObj?.style?.font?.color} fz={titleObj?.style?.font?.size}  style={{ fontFamily: titleObj?.style?.font?.family }} fw={titleObj?.style?.font?.weight} className="hero-title-Tag">{ titleObj.content.value}</Title>    
                </div> }
                {textObj && textObj?.display === "block" &&<div className="hero-text">
                    <Text  c={textObj?.style?.font.color} fz={textObj?.style?.font?.size} style={{ fontFamily: textObj?.style?.font?.family }} fs={textObj?.style?.font?.style} fw={textObj?.style?.font?.weight} className="hero-text-Tag"> {textObj.content.value}</Text>
                </div>}
                {buttonObj && buttonObj?.display === "block" &&<div className="hero-button">
                    <Button style={{ color: buttonObj.style.font.color, backgroundColor: buttonObj.style.backgroundColor ,fontFamily: buttonObj.style.font.family, height: buttonObj?.style?.height, width: buttonObj?.style?.width}} fz={buttonObj?.style?.font?.size} fw={buttonObj?.style?.font?.weight} variant="Default" radius={buttonObj.style.radius} onClick={handleButtonClick}  className="ChildButtonDiv">{buttonObj.content.value}</Button>
                </div>}
            </div>
            {hoverImg && hoverImg?.display === "block" &&<div className="child-container-b" style={{
                display: hoverImg && hoverImg.content.src ? null : null,}}>
                {hoverImg && hoverImg.content.src &&<img src={hoverImg.content.src} className="ChildImageTag"></img>}
            </div>}
        </div>
    </div>
    );
}
export default HeroOne;
