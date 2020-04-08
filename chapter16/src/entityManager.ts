import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/User';

createConnection().then(async connection => {
  const entityManager = getManager();
  const user = await entityManager.findOne(User, 4);

  user.name = 'manager';
  await entityManager.save(user);
  await connection.close();
});
