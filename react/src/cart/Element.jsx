import React from 'react'

function Elem() {
    return(
        <div class='parent'>
            <div class='child'>
              <img src={arr[0].image} height={150} width={150}/>
            </div>
        <div class='child'>
          <h3>{arr[0].title}</h3>
          <p><b>Catagory: </b>{arr[0].category}</p>
          <h4>${arr[0].price}</h4>
          
        </div>
            </div>
    );
}