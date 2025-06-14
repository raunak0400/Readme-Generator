import React, { useState, useEffect } from "react";

export default function NotificationModel() {
    const [open, setOpen] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => setOpen(false), 1000); // Auto-close after 1.5 seconds
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);


    if (!open) return null;

    // Inline styles from Uiverse.io by akshat-patel28
    const cardStyle = {
        width: "330px",
        height: "80px",
        borderRadius: "8px",
        boxSizing: "border-box",
        padding: "10px 15px",
        backgroundColor: "#ffffff",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "15px",
    };
    const waveStyle = {
        position: "absolute",
        transform: "rotate(90deg)",
        left: "-31px",
        top: "32px",
        width: "80px",
        fill: "#ffa30d3a",
    };
    const iconContainerStyle = {
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffa30d48",
        borderRadius: "50%",
        marginLeft: "8px",
    };
    const iconStyle = {
        width: "17px",
        height: "17px",
        color: "#db970e",
    };
    const messageTextContainerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexGrow: 1,
    };
    const messageTextStyle = {
        color: "#db970e",
        fontSize: "17px",
        fontWeight: 700,
        margin: 0,
        cursor: "default",
    };
    const subTextStyle = {
        fontSize: "14px",
        color: "#555",
        margin: 0,
        cursor: "default",
    };
    const crossIconStyle = {
        width: "18px",
        height: "18px",
        color: "#555",
        cursor: "pointer",
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(8px)", // increased blur for stronger effect
                WebkitBackdropFilter: "blur(8px)", // Safari support, match above
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                transition: "backdrop-filter 0.3s, background 0.3s", // smooth transition
            }}
        >
            <div style={cardStyle}>
                <svg style={waveStyle} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                        fillOpacity="1"
                    ></path>
                </svg>

                <div style={iconContainerStyle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        strokeWidth="0"
                        fill="currentColor"
                        stroke="currentColor"
                        style={iconStyle}
                    >
                        <path
                            d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"
                        ></path>
                    </svg>
                </div>
                <div style={messageTextContainerStyle}>
                    <p style={messageTextStyle}>Notification</p>
                    <p style={subTextStyle}>Hover icons for <strong>Name</strong></p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    strokeWidth="0"
                    fill="none"
                    stroke="currentColor"
                    style={crossIconStyle}
                    onClick={() => setOpen(false)}
                >
                    <path
                        fill="currentColor"
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

// import React, { useState, useEffect } from "react";

// export default function NotificationLegend() {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         // Check if notification has already appeared in this session
//         if (!localStorage.getItem("notificationShown")) {
//             setVisible(true);
//             localStorage.setItem("notificationShown", "true"); // Set flag in localStorage
//         }
        
//         // Auto-hide notification after 2 seconds
//         const timer = setTimeout(() => setVisible(false), 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     if (!visible) return null;

//     const legendStyle = {
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         maxWidth: "250px",
//         padding: "10px",
//         borderRadius: "8px",
//         backgroundColor: "#ffffff",
//         boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
//         display: "flex",
//         alignItems: "center",
//         gap: "10px",
//         zIndex: 9999,
//     };

//     const iconContainerStyle = {
//         width: "30px",
//         height: "30px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#ffa30d48",
//         borderRadius: "50%",
//     };

//     const messageTextStyle = {
//         color: "#db970e",
//         fontSize: "15px",
//         fontWeight: 700,
//         margin: 0,
//     };

//     const subTextStyle = {
//         fontSize: "12px",
//         color: "#555",
//         margin: 0,
//     };

//     return (
//         <div style={legendStyle}>
//             <div style={iconContainerStyle}>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20px" height="20px" fill="currentColor">
//                     <path d="M236.8,188.09L149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
//                 </svg>
//             </div>
//             <div>
//                 <p style={messageTextStyle}>Notification</p>
//                 <p style={subTextStyle}>Hover icons for <strong>Name</strong></p>
//             </div>
//         </div>
//     );
// }