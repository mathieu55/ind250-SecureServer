const encryptionService = require("../services/EncryptionService");

module.exports= {
  validate:(req,res)=>{
    let { key } = req.params;

    if(!key){
      res.status(400).json({ message: 'The key in url is missing' });
    }

    let result={
      "key":key  
    };
    result.valid=encryptionService.validate();

    if(result.valid){
      res.json(result);
    }
    else{
      result.message="invalid key";
      res.status(400).json(result);
    }
  }
}