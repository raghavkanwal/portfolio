import styled from "styled-components"

export const Text = styled.p`
  font-family: 'Roboto';
  font-size:0.9rem;
  color: ${props => props.theme.textColor};
  margin-bottom:0;
`;

export const BusinessCard = styled.div`
    background-color: ${props => props.theme.businessCardBackground};
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
`

export const BusinessCardHeader = styled.h1`
  font-size: 2.2rem;
  color: ${props => props.theme.textColor};
  font-family: 'M Plus Rounded 1c';
  margin:0;
  line-height:1.3;
`

export const Image = styled.img`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.textColor};
  margin: 0;
`