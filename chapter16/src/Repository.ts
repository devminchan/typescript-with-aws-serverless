import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';
import { User } from './entity/User';

createConnection()
  .then(async connection => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(4);
    user.name = 'repository';
    await userRepository.save(user);
    await connection.close();
  })
  .catch(e => console.log(e));
