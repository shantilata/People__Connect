import styled from '@emotion/styled'
import React from 'react'

const IntroBoxImages = [
    "/assets/introbox_img1.jpg"
]

const IntroBox = () => {
  return (
    <Container>
      <IntroImage src={IntroBoxImages[0]} />
    </Container>
  );
}

export default IntroBox

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    background-color: whitesmoke;
`

const IntroImage = styled.img`
    flex: 1;
    width: 90%;
    height: auto;
    margin: 0px auto;
`
