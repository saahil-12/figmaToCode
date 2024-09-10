import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rec from '../assets/Image.png'
import './highlight.css'

function Highlight() {

   const highlightsArray = [
    {
        id:1,
        title:"surfing",
        description:"best hawalian island for surfing"
    }
   ]

    return (
        <>
            <h3 className='mt-5' style={{ marginLeft: "18rem" }}>Highlights</h3>

            <div className='Cardstyle d-flex justify-content-between '>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={rec} />
                    <Card.Body>
                        <Card.Title>Highlights</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={rec} />
                    <Card.Body>
                        <Card.Title>Highlights</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={rec} />
                    <Card.Body>
                        <Card.Title>Highlights</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </>

    )
}

export default Highlight