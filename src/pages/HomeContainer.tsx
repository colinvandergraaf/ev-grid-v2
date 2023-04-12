import { Map } from "../components/Map"


export const HomeContainer = () => { 
  return (
    <div className="text-center  ">
      <div>
        <h1 className="text-amber-400 p-4 font-semibold" >
          City of Los Angeles</h1>
        
        <h3 className="text-purple-400 font-semibold">  Capital Improvement Projects </h3>
        <h3 className="text-pink-600 font-semibold"> EV Charging Stations</h3>
       
      </div>
      <div>
      <Map />
      </div>
    </div>
  )
}
