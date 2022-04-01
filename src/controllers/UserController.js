const pool = require("../config/db");

class UserController {
  //get all todos.
  async getAll() {
    let results = await pool.query(`SELECT * FROM users `).catch(console.log);    
    return results.rows;
  }

  //create a user
  async createUser(user) {
    await pool
      .query("INSERT INTO users (username, email,password) VALUES ($1, $2, $3)", [user.username,user.email,user.password])
      .catch(console.log);
    return;
  }
  async getUser(userId) {

    let results = await pool
    .query(`SELECT * FROM users WHERE user_id = ${userId} `)
      .catch(console.log);
      console.log()
    return results.rows;
  }

  //update a todo.
  async updateUser(userUpdate) {
      const id = userUpdate.userId
      const username = userUpdate.username
      const email = userUpdate.email
      const password = userUpdate.senha

      await pool
      .query(`UPDATE users SET username=$1, email=$2, password=$3 WHERE user_id=$4`, [username,email,password,id])
      .catch(console.log);
    return;
  }

  //delete a todo.
  async deleteUser(userId) {
    await pool.query(`DELETE FROM users WHERE user_id=$1`, [parseInt(userId)]).catch(console.log);
    return;
  }
}

module.exports = UserController;