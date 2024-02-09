import React from "react";
import { Title,Text,Button} from "@apf/core";
import "@apf/core/dist/style.css";
import "./HeroBrikOne.css";
function HeroOne(props){
    // eslint-disable-next-line react/prop-types
    const backgroundImg = props?.data?.data?.find((item) => item?.content?.type === "img" && item?.content?.for === "background");
    // eslint-disable-next-line react/prop-types
    const hoverImg = props.data.data.find((item) => item.content.type === "img" && item.content.for === "image one");
    // eslint-disable-next-line react/prop-types
    const titleObj = props.data.data.find((item) => item.content.type === "title");
    // eslint-disable-next-line react/prop-types
    const textObj = props.data.data.find((item) => item.content.type === "text");
    // eslint-disable-next-line react/prop-types
    const buttonObj = props.data.data.find((item) => item.content.type === "button");
    // eslint-disable-next-line react/prop-types
    const logo = props?.data?.data.find((item) => item?.content?.type === "img" && item?.content?.for === "logo");
    return(
    <div className="Hero-Containor">
        <div className="Hero-Image-Containor" style={backgroundImg && backgroundImg.content.src? null :  {backgroundColor: `${backgroundImg}` }}>
                {backgroundImg && backgroundImg.content.src &&<img src={backgroundImg.content.src} className="HeroImageDiv"></img>}
            </div>
            <div className="logo">
                    <img src={logo?.content?.src} className="logoTag"></img>
                </div>

        <div className="Hero-content-container">
            <div className="child-container-a">
                
                <div className="hero-title">
                    <Title c={titleObj?.style?.font?.color} fz={titleObj?.style?.font?.size}  style={{ fontFamily: titleObj?.style?.font?.family }} fw={titleObj?.style?.font?.weight} className="hero-title-Tag">{ titleObj.content.value}</Title>    
                </div> 
                <div className="hero-text">
                    <Text  c={textObj?.style?.font.color} fz={textObj?.style?.font?.size} style={{ fontFamily: textObj?.style?.font?.family }} fs={textObj?.style?.font?.style} fw={textObj?.style?.font?.weight} className="hero-text-Tag"> {textObj.content.value}</Text>
                </div>
                <div className="hero-button">
                    <Button style={{ color: buttonObj.style.font.color, backgroundColor: buttonObj.style.backgroundColor ,fontFamily: buttonObj.style.font.family}}  size={buttonObj.style.font.size} variant="Default" radius={buttonObj.style.radius}  className="ChildButtonDiv">{buttonObj.content.value}</Button>
                </div>
            </div>
            <div className="child-container-b" style={hoverImg && hoverImg.content.src? null :  null}>
                {hoverImg && hoverImg.content.src &&<img src={hoverImg.content.src} className="ChildImageTag"></img>}
            </div>
        </div>
    </div>
    );
}
export default HeroOne;
