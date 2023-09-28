export default function handler(req, res){

if ( req.method=="POST"){
    console.log("creating a product")
    return res.status(200).json("creating  a product")
}else{
    return res.status(200).json("Getting a product")
}
}