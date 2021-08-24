import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://lumiere-a.akamaihd.net/v1/images/eu_blw-1_v1_c169_r_fe1af76f.jpeg?region=0,0,1460,824/scale?width=1440&aspectRatio=1.78" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/667014A03A3FD52CA27AED004F896D80625AB6C47BA8FA18B7670C9C6F95E439/scale?width=1920&aspectRatio=1.78&format=png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupButton>
            </Controls>
            <SubTitle>
                2h 13min 13 August 2021 Action, Adventure, Science Fiction
            </SubTitle>
            <Description>
                In Marvel Studios’ action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.
            </Description>
        </Container>
    )
}

export default Details


const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div `
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div `
    display: flex;
    align-items: center;
`

const PlayButton = styled.button `
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton) `
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249,);
    text-transform: uppercase;
`
const AddButton = styled.button `
    margin-right: 15px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 25px;
        color: white;
    }
`
const GroupButton = styled(AddButton) `
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
`
const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`