import { updateAvatarUser } from '../../models/userModel.js';

export async function updateAvatarUserController(req, res) {
  const { id } = req.params;
  const { avatarUrl } = req.body;
  const result = await updateAvatarUser(id, avatarUrl);
  res.json({
    message: 'Avatar do usuário atualizado com sucesso!',
    user: result
  });
}