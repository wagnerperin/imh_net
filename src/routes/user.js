const { createUser, findUsers, deleUserByEmail } = require("../services/user");

async function userRoutes(fastify, options){
    fastify.get('/users', async (request, reply) => {
        const users = await findUsers();
        reply.send(users);
    });

    fastify.post('/users', async (request, reply) => {
        try {
            const newUser = await createUser(request.body);
            reply.status(201).send(newUser);
        } catch (error){
            console.error(error);
            if (error.code == 11000){
                reply.status(409).send({message: 'E-Mail já cadastrado.'});
            }else{
                reply.status(500).send({message: 'Ocorreu um erro ao salvar.'});
            }
        }
    });

    fastify.delete('/users', async (request, reply) => {
        const { email } = request.query;

        if(!email){
            return reply.status(400).send({
                message: "O parâmetro 'email' é obrigatório."
            })
        }

        try{
            const deletedUser = await deleUserByEmail(email);
            
            if(deleUserByEmail){
                reply.send({
                    message: `O usuário ${deletedUser.name} foi removido.`
                });
            }else{
                reply.status(404).send({
                    message: `O email ${email} não existe no banco.`
                });
            }

        } catch (error){
            fastify.log.error(error);
            reply.status(500).send({
                message: "Ocorreu um erro ao excluir usuário."
            });
        }
    });
}

module.exports = userRoutes;