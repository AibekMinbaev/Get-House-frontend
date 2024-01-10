import "./Properties.css" 
import Property from '../Property/Property.js'
import Filter from '../Filter/Filter.js'
import Data from "./propertiesData.json"

function Properties(){
    return(
        <div id="properties-container">
            <Filter></Filter>
            <div>
                {Data.map((item, index) =>(
                <Property 
                    key={index} 
                    price={item.price} 
                    city={item.city}
                    square_footage={item.square_footage}
                    num_bathrooms={item.num_bathrooms}
                    num_bedrooms={item.num_bathrooms}
                    property_image={item.property_image}
                />
                ))}
            </div>
        </div>
    ) 
}

export default Properties; 