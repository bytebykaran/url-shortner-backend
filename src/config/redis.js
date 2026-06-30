import { createClient } from "redis";
const redisClient=createClient({
    url:process.env.REDIS_URL
})

redisClient.on("error",(error)=>{
    console.log("Redis error: ",error)
})
redisClient.on("connect",()=>{
    console.log("Redis connected successfully")
})
export default redisClient