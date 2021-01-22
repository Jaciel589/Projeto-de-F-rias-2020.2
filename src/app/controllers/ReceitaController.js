import Receita from '../models/Receita'
 
class ReceitaController{
async store(req, res){
  return res.json({ok: true});
}
}
export default new ReceitaController