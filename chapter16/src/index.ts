import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection()
  .then(async connection => {
    console.log('새로운 유저 생성');

    // eslint-disable-next-line no-unused-vars
    const user = await User.create({
      email: 'test@mail.com',
      password: 'pass',
      age: 20,
      name: '홍길동',
    }).save();

    console.log('사용자 목록');

    const users = await User.find();

    console.log('Loaded users: ', users);

    console.log('접속 끊기');

    await connection.close();
  })
  .catch(error => console.log(error));
