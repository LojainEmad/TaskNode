import fs from 'fs'

let usersData = [];

export function readUsersData (){
  try {
    const fileData = fs.readFileSync(fileData, 'utf8');
    usersData = JSON.parse('users.json');
  } catch (error) {
    console.error(error);
    usersData = [];
  }
};

export function getUserById (userId) {
  return usersData.find(user => user.id === userId);
};

export function getuser(req,res,next){
    const userId = req.params.id;
  const user = getUserById(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};
export function addUser (req, res,next)  {
  const newUser = req.body; 
  fs.readFile('users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("error");
      return;
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }
    users.push(newUser);
    fs.writeFile('users.txt', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("error to write");
        return;
      }
      res.status(200).send('User added successfully.');
    });
  });

  const updateUser = (req, res) => {
  const { id, ...userData } = req.body;

  fs.readFile('users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to read users file.');
      return;
    }

    let users = [];
    if (data) {
     
      users = JSON.parse(data);
    }
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      res.status(404).send('User not found.');
      return;
    }

    users[userIndex] = { ...users[userIndex], ...userData };
    fs.writeFile('users.txt', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to write to users file.');
        return;
      }

      res.status(200).send('User updated successfully.');
    });
  });

  const deleteUser = (req, res) => {
    const { id } = req.body; 

    fs.readFile('users.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to read users file.');
        return;
      }
  
      let users = [];
      if (data) {

        users = JSON.parse(data);
      }
  
      const userIndex = users.findIndex(user => user.id === id);
  
      if (userIndex === -1) {
        res.status(404).send('User not found.');
        return;
      }
      users.splice(userIndex, 1);
  
      fs.writeFile('users.txt', JSON.stringify(users), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Failed to write to users file.');
          return;
        }
  
        res.status(200).send('User deleted successfully.');
      });
    });
  };
  
  module.exports = { deleteUser };
};
};


