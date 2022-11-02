import './regIntro.css'
import TopNav from "../../../components/topnav/TopNav"
import { Image } from "react-bootstrap"
import Redivivus from '../../../assets/logo.png'
import { Container, Row, Col } from "react-bootstrap"
import Lottie from 'react-lottie';
import animationDataTruck from '../../../assets/fastTruck.json'
import animationDataHuman from '../../../assets/garbageCollection.json'
import { useState } from "react"
import Button from "react-bootstrap/Button"
import lineSeparator from '../../../assets/separatorLine.svg'

export default function RegistrationIntro() {


    const defaultOptionsTruck = {
        loop: true,
        autoplay: true,
        animationData: animationDataTruck,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptionsHuman = {
        loop: true,
        autoplay: true,
        animationData: animationDataHuman,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <TopNav />
            <Container className='mt-5'>
                <Row>
                    <Col >
                        <Lottie
                            options={defaultOptionsTruck}
                            height={200}
                            width={200} />
                    </Col>

                    <Col >
                        <Lottie
                            options={defaultOptionsHuman}
                            height={200}
                            width={200} />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className='text-center'>
                        <Button variant='outline-dark'>Buyer</Button>
                    </Col>

                    <Col className='text-center'>
                        <Button variant='success'>Seller</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
