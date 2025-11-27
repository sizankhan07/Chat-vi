import { ENV } from "./env.js";
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

const aj = arcjet({

  key: ENV.ARCJET_KEY,
  rules: [
    
    shield({ mode: "LIVE" }),
    
    detectBot({
      mode: "LIVE", 
    
      allow: [
        "CATEGORY:SEARCH_ENGINE", 
    ],
    }),
   
    slidingWindow({
      mode: "LIVE",ics: ["ip.src"],
      refillRate: 5, 
      interval: 10, 
      capacity: 10, 
    }),
  ],
});
export default aj;