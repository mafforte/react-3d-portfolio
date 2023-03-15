import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 1rem 0;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem
`
const Logo = styled.img`
    width: 100px;
`
const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem
`
const ListItem = styled.li`
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem
`
const Icon = styled.img`
    width: 1.5rem;
`
const Button = styled.button`
    width: 100px;
    padding: 0.5rem 1rem;
    background-color: #da4ea2;
    color: #fff;
    border: unset;
    border-radius: 0.5rem;
    cursor: pointer;
`

const Navbar = () => {
    return(
        <Section>
            <Container>
                <Links>
                <Logo src="./img/logo.png" />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar;