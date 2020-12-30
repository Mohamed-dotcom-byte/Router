import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const Trailer = (props) => {
    const [movie,setMovie]=useState(null);
    useEffect(()=>{
        setMovie(props.movies.filter((el)=>el.id === props.match.params.id)[0])
    });
    return (
        <div>
            {movie && (
<Card  style={{ backGroundColor:' #282c34;', width: '650', color:'black', margin:'20px 10px', fontSize:12, fontFamily:'monospace' }}>
<Card.Body >
    <Card.Title style={{fontSize:20}}>{movie.title}</Card.Title>
    <Card.Title>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         
        />
        </Card.Title>
        <iframe width="560" height="315" src={movie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
  </Card.Body>
 <Card.Text>
      <Button onClick={()=>props.history.goBack()}>Go back</Button>
      <Button onClick={()=>props.history.goForward()}>Go forward</Button>
</Card.Text>
<Link to="/">
      <Button>Go Home</Button>
      </Link>
</Card>
)}
        </div>
    )
}

export default Trailer
