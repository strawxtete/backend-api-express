import { createUser } from '../../models/userModel.js';

export async function createUsersController(req, res) {

  const user = {
    avatar: "https://github.com/strawxtete.png",
    name: "Sthefany Santiago",
    email: "sthefany.santiago@example.com",
    pass: "123"
  }
  
  const result = await createUser(user)
  
  res.json({
    message: 'Usuário criado com sucesso!',
    user: result
  })
}