import React, { useState } from 'react';

function AllCardsItem (props) {    
    const {image, name, botanical_name, height, usda_zones, description} = props
    const [state, setState] = useState({ 
        bgColor: "",
        color: "",
        text: "Save"
     })

    const getStyle = () => {
        if (state.text === "Save") {
            setState({
                bgColor: "#A3C586",
                color: "white",
                text: "Saved"
            })
        }
        else {
            setState({
                bgColor: "#5B7444",
                color: "white",
                text: "Save"
            })
        }
    }

    const onClickFunction = () => {
        props.savePlant(props)
        getStyle();
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
                        <button onClick={onClickFunction} style={{ backgroundColor: state.bgColor, color: state.color }} className="btn">{state.text}</button>
                    </div>
                </div>
            </div>
        )}

export default AllCardsItem