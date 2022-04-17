import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
              <h1 className='text-center'>Question And Answer Page</h1>
              <div className='shadow p-4 m-4'>
                  <h2 className='text-center'>Difference Between Authenticaton and Authorization </h2>
                  <div className='first-answer mt-4'>
                      <div className='p-4 shadow'>
                          <h3 className='text-center'>Authentication</h3>
                          <p>
                          Authentication is the process orecognizing a user’s identit
                          authentication is the process of verify in who someone is.Usually done before authorization.Generally, transmits info through an ID Token.Generally governed by the OpenID Connect (OIDC) protocol.Example: Employees in a company are required to authenticate through the network before accessing their company email
                          </p>
                      </div>
                      <div className='p-4 shadow'>
                          <h3 className='text-center'>Authorization</h3>
                          <p>
                          Authorization in system security is the process of giving the user permission to access a specific resource or function.Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization.Usually done after successful authentication.Generally, transmits info through an Access Token
                          </p>
                      </div>
                  </div>
              </div>
        </div>
    );
};

export default Blogs;