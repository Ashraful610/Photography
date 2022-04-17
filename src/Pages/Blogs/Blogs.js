import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5'>
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
              <div className='shadow p-4 m-5'>
                   <h2 className='second-question'>
                       Why are you using firebase ? <br />
                       What other options do you have to implement authentication ?
                   </h2>
                <div className='shadow p-4'>
                    <p className='second-anwser'>
                    Firebase is a backend system. Where we can store data for mobile or web applications. Moreover I can use it for ios or mobile operating. Moreover, firebase is a remote data base. As a result, we can access it from any device or place. Without such work we can do more different types of work very easily and do not have to pay extra for backend server. For which firebase is very dear to me and I use it. For authentication we can use Stytch, Ory, Supabase, Okta, PingIdentify, Fontegg, Authress, AuthO etc without firebase.
                    </p>
                </div>
              </div>
              <div className='shadow p-4 m-5'>
                  <h2>
                      What other service does firebase provide other than authenticaton
                  </h2>
                   <div className='shadow p-4'>
                        <p>
                        The things that we can do without authentication through firebase are given below. We can work with all real time data through firebase. For example - cheatapp, liveStrim etc. Basically starting from the database. Whatever we can do. For example, we can find out if an app will crash due to an error. Firebase allows us to show crash reports. Firebase is a backend system. Where we can store data for mobile or web applications. Moreover I can use it for ios or mobile operating.
                        </p>
                   </div>
              </div>
        </div>
    );
};

export default Blogs;