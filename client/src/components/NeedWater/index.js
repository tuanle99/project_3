import React from 'react';
import './style.css'

export function NeedWater({ children }) {
  return (
    <div style={{height: '70%'}} className="needs-water">
      {children}
    </div>
  )
}

export function WaterCard(props) {
  return (
    <div>
      {props.data.map((plant) => {
        return (<div>
          <div style={{width: "90%", margin: '20px'}} key={plant.id} className="card">
            <div className="card-body plant-card">
              <img src={plant.image} style={{ maxWidth: "100px" }} alt="plant"/>
              <h5 className="card-title">{plant.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{plant.botanical_name}</h6>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}