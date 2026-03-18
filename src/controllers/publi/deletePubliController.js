import { deletePubli } from '../../models/publiModel.js';

export async function deletePubliController(req, res) {
  const { id } = req.params;
  const result = await deletePubli(id);
  res.json({
    message: 'Publicação excluída com sucesso!',
    publi: result
  });
}