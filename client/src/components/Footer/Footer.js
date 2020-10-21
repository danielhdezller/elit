import React from 'react'
import styled from "styled-components";

const FooterStyle = styled.div`
  font-family: 'Rubik Mono One', sans-serif;
`

const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className='row bg-dark p-5 d-flex justify-content-center'>
        <small className='text-light'>
          <FooterStyle>
            ELIT © 2020
          </FooterStyle>
        </small>
      </div>
    </div>
  )
}

export default Footer