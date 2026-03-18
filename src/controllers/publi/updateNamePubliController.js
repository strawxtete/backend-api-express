import { updatePubli } from '../../models/publiModel.js';

export async function updateNamePubliController(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const result = await updateNamePubli(id, name);
  res.json({
    message: 'Nome da publicação atualizado com sucesso!',
    publi: result
  });
}