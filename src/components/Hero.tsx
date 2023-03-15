import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 80vw;
    margin: 0 auto;
`

const Left = styled.div`
flex: 2;
`

const Title = styled.h2`
    font-size: 4rem;
    font-weight: bold;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
const Line = styled.img`
    height: 0.3rem;
    margin: 2rem 0;
`
const Subtitle = styled.h3``
const Desc = styled.p``

const Right = styled.div`
flex: 3;
`
const Img = styled.img`
    max-width: 800px;
    width: 100%;
    animation: animateImg 2s infinite ease alternate;

    @keyframes animateImg {
        to {
            transform: translateY(2rem);
        }
    }
`

const Hero = () => {
    return(
        <Section>
            <Navbar/>

            <Container>
                <Left>
                    <Title>Think. Make. Solve</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What we Do</Subtitle>
                    </WhatWeDo>
                    <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
                </Left>

                <Right>
                    <Img src="./img/moon.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;