import {Screens} from "../types/navigation"

export const navigation = (screen:any)=>{
    return{
      type:Screens
      payload:screen  
    }
    
}