import axios from "axios";

class ServerCall{
    static fnSendGetReq(url,token){
        return axios.get(process.env.NEXT_PUBLIC_BASE_URL+url,{
            headers:{
                Authorization:token
            }
        })
    }
    static fnSendPostReq(url,data){
        return axios.post(process.env.NEXT_PUBLIC_BASE_URL+url,data)
    }
}

export default ServerCall;