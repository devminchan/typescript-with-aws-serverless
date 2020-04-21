import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/User';
import { Profile } from './entity/Profile';
import { Post } from './entity/Post';
import { Group } from './entity/Group';

createConnection()
  .then(async connection => {
    const profile = await Profile.create({
      name: 'kim',
      age: 22,
    }).save();

    const groups: Group[] = [
      await Group.create({
        name: '탁구동호회',
      }).save(),
      await Group.create({
        name: '농구동호회',
      }).save(),
    ];

    const user = await User.create({
      email: 'tester3@mail.com',
      password: 'password',
      profile,
      groups,
    }).save();

    // eslint-disable-next-line no-unused-vars
    const post = await Post.create({
      title: '제목',
      content: '내용',
      user,
    }).save();

    console.log(await User.find({ relations: ['groups'] }));
    console.log(await Group.find({ relations: ['users'] }));
    await user.remove();
    console.log(await User.find());
    console.log(await Group.find());
    console.log(await getManager().query('SELECT * FROM group_users_user'));

    await connection.close();
  })
  .catch(error => console.log(error));
