"use client";
import styles from "./Womazing.module.scss";
import React from "react";
import "react-slideshow-image/dist/styles.css";

import { Slide } from "react-slideshow-image";

interface IWomazingSlider {
    url: string;
}

interface IWomazingSliderProps {
    sliders: IWomazingSlider[];
}

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "487px",
};

const WomazingSlider = ({ sliders }: IWomazingSliderProps) => {
    return (
        <div className={styles["slide-container"]}>
            <Slide>
                {sliders.map((slideImage, index) => (
                    <div key={index}>
                        <div
                            style={{
                                ...divStyle,
                                backgroundImage: `url(${slideImage.url})`,
                            }}
                        ></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default WomazingSlider;
