import {loadStripe} from '@stripe/stripe-js'

let stripPromise;


const getStripe=()=>{
    if(!stripPromise){
        stripPromise=loadStripe("pk_test_51LlYwFFaOGYeKQNM9QEgjdFAaZFi5x9zANElBveoAXcoRICVLHSFXt5fzFBVInX35PsrVloz8sv40hjx5uWFmb3b00a8ygPkcQ");

    }
    return stripPromise;
}

export default getStripe;