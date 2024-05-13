import React from "react";
import styles from "./Contacts.module.scss";
import GoogleMapReact from "google-map-react";

interface AnyReact {
    text: string;
    lat: number;
    lng: number;
}

const AnyReactComponent = ({ text }: AnyReact) => <div>{text}</div>;

const defaultProps = {
    center: {
        lat: 55.4424,
        lng: 37.3636,
    },
    zoom: 8,
};
const ContactMaps = () => {
    return (
        <div className={styles["contact-maps"]}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="Карта"
                />
            </GoogleMapReact>
        </div>
    );
};

export default ContactMaps;
