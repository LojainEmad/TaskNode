/*function getUser(req,res,next) {
    res.json({name:"logy" , age:20});
}

function addUser(req,res,next){
    res.json({message:"add user"});
}

module.exports={getUser , addUser};
*/
//************************************************ */
export function getUser(req,res,next) {
    res.json({name:"logy" , age:20});
}

export function addUser(req,res,next){
    res.json({message:"add user"});
}

