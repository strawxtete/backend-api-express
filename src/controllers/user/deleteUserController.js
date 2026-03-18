import { deleteUser } from '../../models/userModel.js';

export async function deleteUsersController(req, res) {
  const { id } = req.params;
  const result = await deleteUser(id);
  res.json({
    message: 'Usuário excluído com sucesso!',
    user: result
  });
}