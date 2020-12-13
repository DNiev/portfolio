import React from 'react';
import {Image, Container} from 'react-bootstrap';

const Social = () => {
    return (
        <>
        <Container className='socialBar'>
            <a target='_blank' href='https://www.linkedin.com/in/danny-nieves-web-dev/'>
                <Image className='socialLink' src='https://imgur.com/BoXaJfS.png' />
            </a>
            <a target='_blank' href='https://github.com/DNiev'>
                <Image className='socialLink' src='https://imgur.com/tTp34tX.png'/>
            </a>
        </Container>
        </>
    )
};

export default Social;
