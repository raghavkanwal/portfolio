import * as React from "react"
import styled from "styled-components";

import "normalize.css"


const Subtitle = styled.h3`
    display: inline-block;
    margin: 0 0 1rem 0;
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.16);
    font-size: 1.2rem;
    color: rgba(255,255,255,0.92);
    padding-bottom: 0.25rem;
`;


const Text = styled.p`
  font-family: 'Roboto';
  font-size:0.9rem;
  color: rgb(255,255,255,0.92);
  margin-bottom:3rem;
  text-indent: 1rem;
  text-align: justify;
  word-break: break-word;
`;

const Span = styled.span`
    color: rgb(255,255,255,0.92);
    font-size:0.9rem;
    font-family: 'Roboto';
    font-weight:bold;
`;

const About = () => (
    <>
        <Subtitle>About</Subtitle>
        <Text>I'm a front-end engineer based in Delhi with a passion for building digital products and enabling organizations to deliver bespoke web experiences. I have a knack for web design and development, from planning and designing all the way to solving real-life problems with code. When not online, I love gaming and I find myself regularly on the weird side of YouTube. Currently, I'm helping <a style={{color:`#81E6D9`, textDecoration: `none`}} href="https://unicommerce.com" target="_blank" rel="noreferrer">Unicommerce</a> realise their vision, while completing my Master's degree in Software Systems at BITS Pilani.</Text>

        <Subtitle>Bio</Subtitle>
        <div class="pair-item" style={{ paddingLeft: `3rem`, textIndent: `-3rem`, color: `rgb(255,255,255,0.92)`,fontFamily: `'Roboto'`, fontSize: `0.9rem`, marginBottom: `0.3rem`, textAlign: `justify`}}>
            <Span class="key" style={{ marginRight: `1rem`,}}>1993</Span>
            Born
        </div>
        <div class="pair-item" style={{ paddingLeft: `3rem`, textIndent: `-3rem`, color: `rgb(255,255,255,0.92)`,fontFamily: `'Roboto'`, fontSize: `0.9rem`}}>
            <Span class="key" style={{ marginRight: `1rem`,}}>2014</Span>
            Completed the Bachelor's program at Guru Gobindh Singh Indraprastha University (Bachelor's in Computer Applications)
        </div>
        <div class="pair-item" style={{ paddingLeft: `3rem`, textIndent: `-3rem`, color: `rgb(255,255,255,0.92)`,fontFamily: `'Roboto'`, fontSize: `0.9rem`, marginBottom: `0.3rem`, textAlign: `justify`}}>
            <Span class="key" style={{ marginRight: `1rem`,}}>2014</Span>
            Joined <a style={{color:`#81E6D9`, textDecoration: `none`}} href="https://mobikasa.com" target="_blank" rel="noreferrer">Mobikasa</a> as a UI Designer. Primarily worked on e-commerce platforms built using Shopify, Magento and ASP.Net. 
        </div>
        <div class="pair-item" style={{ paddingLeft: `3rem`, textIndent: `-3rem`, color: `rgb(255,255,255,0.92)`,fontFamily: `'Roboto'`, fontSize: `0.9rem`, marginBottom: `0.3rem`, textAlign: `justify`}}>
            <Span class="key" style={{ marginRight: `1rem`,}}>2016</Span>
            Joined <a style={{color:`#81E6D9`, textDecoration: `none`}} href="https://iimjobs.com" target="_blank" rel="noreferrer">iimjobs</a> as a Frontend Engineer. As the sole front-end engineer, helped iimjobs with their UI/UX requirements and built several Single Page, Progressive Web Applications.   
        </div>
        <div class="pair-item" style={{ paddingLeft: `3rem`, textIndent: `-3rem`, color: `rgb(255,255,255,0.92)`,fontFamily: `'Roboto'`, fontSize: `0.9rem`, marginBottom: `0.3rem`, textAlign: `justify`}}>
            <Span class="key" style={{ marginRight: `1rem`,}}>2018</Span>
            Joined <a style={{color:`#81E6D9`, textDecoration: `none`}} href="https://unicommerce.com" target="_blank" rel="noreferrer">Unicommerce</a> as a Frontend Engineer. Presently working as Lead UI Engineer, leading a team on a B2B SaaS product. I take pride in developing and implementing design systems from scratch and building products which help deliver 20% of India's daily online order volume. 
        </div>

        <Subtitle>Interests</Subtitle>
        <Text>Gaming, music, casual gastronomy, reading. Not in that particular order.</Text>

        <Subtitle>On The Web</Subtitle>
        <div class="pair-item" style={{ paddingLeft: `3rem`, textIndent: `-3rem`, color: `rgb(255,255,255,0.92)`,fontFamily: `'Roboto'`, fontSize: `0.9rem`, marginBottom: `0.3rem`, textAlign: `justify`}}>
        <a href="https://github.com/raghavkanwal" target="_blank" rel="noreferrer">
            <Span class="key" style={{ marginRight: `1rem`,}}><svg stroke="#81E6D9" fill="#81E6D9" stroke-width="0" viewBox="0 0 512 512" focusable="false" class="chakra-icon css-13otjrl" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg></Span>
        </a>

        <a href="https://www.linkedin.com/in/raghavkanwal" target="_blank" rel="noreferrer">
            <Span class="key" style={{ marginRight: `1rem`,}}><svg stroke="#81E6D9" fill="#81E6D9" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></Span>
        </a>
        
        

            <Span class="key" style={{ marginRight: `1rem`,}}>
                
            </Span>
            
        </div>
    </>
)

export default About