import { deleteUser } from '../../models/userModel.js';

export async function deleteUsersController(req, res) {
  const id = req.params.id;
  const result = await deleteUser(+id); //operador "+" para converter string em número 

  if (!result) {
    res.json({ message: 'Usuário não encontrado!' });
  }

  return res.json({
    message: 'Usuário excluído com sucesso!',
    user: result
  });
  
}