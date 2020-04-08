import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Profile } from './entity/Profile';

createConnection()
  .then(async connection => {
    const profile = await Profile.create({
      name: 'kim',
      age: 22,
    }).save();

    const user = await User.create({
      email: 'tester2@mail.com',
      password: 'password',
      profile,
    }).save();

    console.log('before delete:profile', await Profile.find());
    console.log(
      'before delete:user',
      await User.find({ relations: ['profile'] }),
    );
    await user.remove();
    console.log(await Profile.find());

    await connection.close();
  })
  .catch(error => console.log(error));
