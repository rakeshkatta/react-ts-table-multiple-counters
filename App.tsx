import * as React from 'react';
import './style.css';

export default function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      const result = await response.json();
      console.log('result', result);
      result.map((us) => (us.count = 0));
      setUsers(result);
      console.log('users', users);
    };
    const getNewData = async (data) => {
      data.map((us) => (us.count = 0));
      console.log('newdata', data);
      setUsers(data);
    };
    //getNewData(newdata)
    getData();
  }, []);

  const handleIncrement = (userid) => {
    const userdata = users.find((user) => user.id === userid);
    userdata.count += 1;
    // {
    //   //console.log("id", name)
    //  return id === userid})
    console.log('users----', users);

    setUsers((users) => [...users]);
    console.log('users', users);
  };

  const handleDecrement = (userid) => {
    const userdata = users.find((user) => user.id === userid);
    userdata.count -= 1;
    // {
    //   //console.log("id", name)
    //  return id === userid})
    //  console.log("users----", users);

    setUsers((users) => [...users]);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Increment</th>
            <th>Decrement</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td onClick={() => handleIncrement(user.id)}>+</td>
                <td onClick={() => handleDecrement(user.id)}>-</td>
                <td>{user.count}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
