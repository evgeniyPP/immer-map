# immer-map

Immer-based map function for arrays.

```bash
npm install immer-map
```

```ts
import 'immer-map';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
    },
  },
];

const newUsers = users.immerMap(user => {
  user.company.name = 'Deckow-Crist';
  return user;
});

console.log(users[0].company); // { name: 'Romaguera-Crona' }
console.log(newUsers[0].company); // { name: 'Deckow-Crist' }
```
