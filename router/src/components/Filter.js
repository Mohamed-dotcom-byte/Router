import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const  Filter = ({keyRate,setKeyRate,search}) => {
const onStarClick=(nextValue)=> {
    setKeyRate( nextValue);

      }
    return (
        <div style={{display:"flex"}}>
            <input type="text" placeholder="Search for a movie" onChange={(e)=>search(e.target.value)}></input>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={keyRate}
          onStarClick={onStarClick}
          starColor={"yellow"} 
          emptyStarColor={"white"}
        />
        </div>
    )
}

export default Filter;
