import jwt from 'jsonwebtoken';
import User from '../models/User'
//import authConfig from '../../config/auth'
class SessionControler{
  async store(req, res){
    const { email, password, } = req.body;
   
    const user = await User.findOne({whare: { email }})
    if(!user){
      return res.status(401).json({error: 'Usuario não existe'})
    }
if (!(await user.checkPassword(password))){
      return res.status(401).json({error: 'Senha incorreta.'})
    }

    //const{id,name}=user;

    
    //return res.json({
      //user:{
        //id,
        //name,
        //email,

     // },
     // token: jwt.sign({id}, authConfig,{
       // expiresIn: authConfig.expiresIn,
     // })
   // })
  }
}

export default new SessionControler();