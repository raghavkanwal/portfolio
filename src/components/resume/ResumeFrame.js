import React, { useState } from "react"
import styled from "styled-components"

const LoadingSpan = styled.span`
    display:block;
    text-align:center;
    font-size: ${props => props.theme.textFontSize};
    color: ${props => props.theme.textColor};
    font-family: 'Roboto';
    padding: 45vh 0;
`;
const ResumeFrame = () => {

    const [isLoading, setLoading] = useState(true);

    const handleLoading = () => {
        setLoading(false)
    }

    return (
        <>
            {isLoading && <LoadingSpan>Please wait...</LoadingSpan>}
            <iframe onLoad={handleLoading} title="Raghav Kanwal" src="https://registry.jsonresume.org/raghavkanwal?theme=pumpkin" style={{width: `100%`, border: 0, height: `100vh`}}></iframe>
        </>
    )
}

export default ResumeFrame;