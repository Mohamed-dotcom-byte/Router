import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {useState} from 'react';
const AddMovie = ({handleClose , show , addMovie}) => {
  const [newMovie, setNewMovie]=useState(()=>{
    return ({
      title: "",
      rate: "",
      description:"",
      img:""

    });
 
  });
  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value});
  }
    return (
        <div>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favourite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Movie title</Form.Label>
    <Form.Control type="text" placeholder="Type movie title" name="title" onChange={handleChange}/>
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Add a description to your movie" name="description" onChange={handleChange} />
    <Form.Label>Movie poster</Form.Label>
    <Form.Control type="text" placeholder="Enter URL for the poster" name="img" onChange={handleChange} />
    <Form.Label>Ratings</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie rate" name="rate" onChange={handleChange} />
  
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose();
            addMovie(newMovie);
          }}>
            Add a movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
