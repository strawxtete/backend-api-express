import { updateUser } from '../../models/userModel.js';

export async function updateUsersController(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;
  const result = await updateUser(id, { name, email });
  res.json({
    message: 'Usuário atualizado com sucesso!',
    user: result
  });
}