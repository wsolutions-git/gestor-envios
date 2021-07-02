import * as shippingDal from "./shippingDal";
import request from "request";
import axios from 'axios'
import {Shipment} from "./shipment";
import path from "path/posix";
require("dotenv").config({path: path.join(__dirname, '../../.env')});

export async function getAllRegisters() {
    return await shippingDal.selectall();
}

export async function createShipment(data : any){
    const shipment = new Shipment();
    shipment.customer = data.customer;
    shipment.descrip = data.descrip;
    shipment.status = data.status;
    shipment.origin_lat = data.origin_lat;
    shipment.origin_long = data.origin_long;
    // shipment.current_lat = data.current_lat;
    // shipment.current_long = data.current_long;
    shipment.end_lat = data.end_lat;
    shipment.end_long = data.end_long;
    return axios.get('https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=' + shipment.origin_lat + ',' + shipment.origin_long + '&destinations=' + shipment.end_lat + ',' + shipment.end_long + '&travelMode=driving&key='+process.env.BING_API_KEY)
      .then(response => {
          if(response.data.resourceSets[0].resources[0].results[0].travelDistance > 20)
              return "Brooooo, this is too far, I just can walk 20km, try something closer";
          //TODO insert into the DB
      } ) 
}

export async function updateShipment(data:any) {
    
}
