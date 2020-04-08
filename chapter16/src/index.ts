import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
// import { Profile } from './entity/Profile';

createConnection()
  .then(async connection => {
    const users = await User.find({ relations: ['profile'] });
    console.log(users);

    await connection.close();
  })
  .catch(error => console.log(error));
