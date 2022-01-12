import React from 'react'
import AllCardsItem from "../AllCardsItem";

function AllCards (props) {

        return (
            props.plantState.map((plant) =>
            <AllCardsItem
            key={plant._id}
            id={plant._id}
            name={plant.name}
            botanical_name={plant.botanical_name}
            height={plant.height}
            usda_zones={plant.usda_zones}
            image={plant.image}
            description={plant.description}
            savePlant={props.savePlant}
            />
            )
        )
}
export default AllCards;