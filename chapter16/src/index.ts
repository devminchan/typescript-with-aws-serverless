import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Profile } from './entity/Profile';

createConnection()
  .then(async connection => {
    const profile = await Profile.create({
      name: 'john',
      age: 22,
    }).save();

    // eslint-disable-next-line no-unused-vars
    const user = await User.create({
      email: 'tester@mail.com',
      password: 'password',
      profile,
    }).save();

    console.log('saved: ', profile);
    console.log('saved: ', user);

    await connection.close();
  })
  .catch(error => console.log(error));
