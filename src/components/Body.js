import RestroCard from "./RestroCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body = () => {


    let [listOfRestaurants,setlistOfRestaurants] = useState(resList);
    
    return(
    <div className="body">
        <div className="filter">
            <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    
                    );
                    setlistOfRestaurants(filteredList);
                }}
            >
                Top Rated Restaurants 
            </button>
        
        </div>
        <div className="res-container">
            {
                listOfRestaurants.map((resturant) => (
                <RestroCard key={resturant.info.id} resData = {resturant}/>

                ))}
            
        </div>
    </div>
    );
};
export default Body;