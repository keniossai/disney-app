import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <h1>Header</h1>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 70px;
    background: #090b13;
`


