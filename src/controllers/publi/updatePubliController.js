import { updatePubli } from '../../models/publiModel.js';

export async function updatePubliController(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const result = await updatePubli(id, { name });
  res.json({
    message: 'Publicação atualizada com sucesso!',
    publi: result
  });
}