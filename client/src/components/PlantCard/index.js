import React, { useRef } from "react";
import API from '../../utils/API';
import "../PlantCard/style.css"

export function PlantCard(props) {
    const { name, botanical_name, height, usda_zones, image, description, number } = props
    const user = localStorage.getItem('user');
    const waterRef = useRef();

    async function updatePlant() {
        const plants = []
        await API.getUser(user).then(res => plants.push(res.data.plants))
        plants[0][number].next_water = waterRef.current.value
        API.updateUserPlant(user, { plants: plants[0] }).then(res => console.log(res))
    }

    function onClick(e) {
        e.preventDefault();
        updatePlant();
    }

    return (
        <div>
            <div className="card border-warning">
                <div className="card-body plant-card">
                    <img src={image} style={{ maxWidth: "100px" }} />
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{botanical_name}</h6>
                    <p className="card-text">Height: {height}</p>
                    <p className="card-text">USDA Zones: {usda_zones}</p>
                    <p className="card-text">{description}</p>
                    <div className='form-water row g-3'>
                        <input ref={waterRef} type='text' className='col-auto form-control' id='next-water' placeholder='Next Water Date (mm/dd/yyyy)' />
                        <button onClick={onClick} type="submit" class="col-auto btn btn-primary mb-3 float-end">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantCard;