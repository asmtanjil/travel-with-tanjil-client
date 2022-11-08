import React from 'react';

const Blog = () => {
  return (
    <div className='mx-4'>

      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What are the differences between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <p>
            <span className='text-xl'>Main 5 differences are below:</span>
          </p>
          <p className='mb-4'>1. <span className='font-semibold'>Type:</span><br />
            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
          </p>
          <p className='mb-4'>2. <span className='font-semibold'>Language:</span><br />
            SQL databases defines and manipulates data based structured query language (SQL).
            A (NoSQL) database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
          </p>
          <p className='mb-4'>3. <span className='font-semibold'>Scalability:</span><br />
            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD.
            But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.
          </p>
          <p className='mb-4'>4. <span className='font-semibold'>Structure:</span><br />
            SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.
          </p>
          <p className='mb-4'>5. <span className='font-semibold'>Support:</span><br />
            Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
            <br />
            User sign-in using username and password or google/facebook.
            Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
            User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
            Resource server then verifies the authenticity of the token using the secret salt/ public key.
          </p>
        </div>
      </div>


      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content md:flex gap-4">
          <p>
            <span className='text-xl font-semibold'>JavaScript</span> <br />
            Javascript is a programming language that is used for writing scripts on the website.
            Javascript can only be run in the browsers.
            It is basically used on the client-side.
            It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
            Javascript is capable enough to add HTML and play with the DOM.
          </p>

          <p>
            <span className='text-xl font-semibold'>NodeJS</span> <br />
            NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs is written in C, C++ and Javascript. Nodejs does not have capability to add HTML tags.
          </p>
        </div>
      </div>


      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
            <br />

            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
          </p>
        </div>
      </div>


    </div>
  );
};

export default Blog;