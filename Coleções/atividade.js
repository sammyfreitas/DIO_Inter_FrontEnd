function getAdmins(map) {
  let admins = [];
  for ([key,value] of map) {
    if (value === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Adalberto','Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge','User');
usuarios.set('Natália','User');

console.log(getAdmins(usuarios))