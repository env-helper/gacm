/* eslint-disable no-console */
import { white } from 'kolorist';
import type { UserInfoJson, UserOldInfoJson } from '../type/shell.type';

export const transformData = (data: UserOldInfoJson): UserInfoJson => {
  const userInfo: UserInfoJson = { version: '', users: [] };
  Object.keys(data).forEach((x) => {
    userInfo.users.push({
      name: data[x].name,
      email: data[x].email,
      alias: data[x].name
    });
  });

  return userInfo;
};

export const padding = (message = '', before = 1, after = 1) => {
  return (
    new Array(before).fill(' ').join(' ')
    + message
    + new Array(after).fill(' ').join(' ')
  );
};

export const geneDashLine = (message: string, length: number) => {
  const finalMessage = new Array(Math.max(2, length - message.length + 2)).join(
    '-'
  );
  return padding(white(finalMessage));
};

export const isLowerCaseEqual = (str1: string, str2: string) => {
  if (str1 && str2)
    return str1.toLowerCase() === str2.toLowerCase();

  else
    return !str1 && !str2;
};

export const printMessages = (messages: string[]) => {
  console.log('\n');
  for (const message of messages)
    console.log(message);

  console.log('\n');
};
