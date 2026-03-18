import { getPublis } from '../../models/publiModel.js';

export async function getPubliController(req, res) {

  const result = await getPublis()

  res.json({
    message: 'Lista de publicações obtida com sucesso!',
    publis: result
  })
}