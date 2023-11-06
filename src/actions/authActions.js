import toast from "react-hot-toast";

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      // You should make an API request to authenticate the user on the server
      // For this example, we'll assume you have an authentication API endpoint

      const response = await fetch('http://localhost:5130/api/v1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
        // If the login is successful, dispatch a success action
        dispatch({ type: 'LOGIN_SUCCESS', payload: credentials });
        toast.success('admin login')
      } else {
        // If the login fails, dispatch a failure action
        dispatch({ type: 'LOGIN_FAILURE' });
        toast.error('login failed')
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};


// If you want to avoid using redux-thunk, 
// you can use other methods to handle asynchronous actions, such as Promises 
// or async/await. Here's an example of how you can modify the login action without
//  using redux-thunk

// export const login = (credentials) => {
//   return (dispatch) => {
//     return fetch('http://localhost:5130/api/v1/admin/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json().then((data) => {
//             dispatch({ type: 'LOGIN_SUCCESS', payload: data });
//              toast.success('admin login')
//           });
//         } else {
//           dispatch({ type: 'LOGIN_FAILURE' });
//           toast.error('admin login error')
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         dispatch({ type: 'LOGIN_FAILURE' });
//          toast.error('admin login error')
//       });
//   };
// };

