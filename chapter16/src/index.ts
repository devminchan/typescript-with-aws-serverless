import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Profile } from './entity/Profile';
import { Post } from './entity/Post';

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

    // eslint-disable-next-line no-unused-vars
    const post = await Post.create({
      title: '제목',
      content: '내용',
      user,
    }).save();

    console.log('before delete:profile', await Profile.find());
    console.log(await Post.find());
    await user.remove();
    console.log(await Profile.find());

    await connection.close();
  })
  .catch(error => console.log(error));
