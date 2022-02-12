import React from "react";


const SingleContentDemo = () => {
  return (
    <>
      {/* THIS IS THE DEMP CONTENT */}
      {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
      <h1>Network Status </h1>

      <h3>What is CryptoVerse?</h3>
        <p>
          CryptoVerse is a blog based around the irrational exuberance of web3, we aim to provide Educational information surrounding the use of Crypto Methodlogies.
        </p>

      <h3>Who created CryptoVerse?</h3>
        <p>
          CryptoVerse was founded by 5 students that studied at Leeds Beckett University, CryptoVerse was originally created as a school project which then further developed
          into what it is today.
        </p>

        <h3>What is Web3?</h3>
        <p>
        Web3 is a concept for the next iteration of the internet, built around decentralised blockchain technology
        — that's the same technology used by cryptocurrencies such as Bitcoin, where data isn't managed by a centralised 
        server or authority, but by all of the computer systems that run on the blockchain.
        </p>

      <h3>What happens to my data?</h3>
        <p>
        CryptoVerse keeps your profile and wallet data private unless you authorize permission to share your data.
         You will see a CryptoVerse confirmation when websites request access to view your account or wallet address.
        </p>

      <h3>How to contact support</h3>
        <p>
          You can email us at <a href="/single/this-is-single-slug-2">email@address.com</a> or use our <a href="/contact">contact form</a>
        </p>
{/* 
      <blockquote>
        <p>
          Typography is pretty important if you don't want your stuff to look
          like trash. Make it good then it won't be bad.
        </p>
      </blockquote>
      <p>
        It's probably important that images look okay here by default as well:
      </p>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1501493870936-9c2e41625521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
          alt="CryptoVerse blog"
        />
        <figcaption>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
          officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
          distinctio veritatis sapiente
        </figcaption>
      </figure>
      <p>
        Now I'm going to show you an example of an unordered list to make sure
        that looks good, too:
      </p>
      <ul>
        <li>So here is the first item in this list.</li>
        <li>In this example we're keeping the items short.</li>
        <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2>Code should look okay by default.</h2>
      <p>
        I think most people are going to use{" "}
        <a href="https://highlightjs.org/">highlight.js</a> or{" "}
        <a href="https://prismjs.com/">Prism</a> or something if they want to
        style their code blocks but it wouldn't hurt to make them look{" "}
        <em>okay</em> out of the box, even with no syntax highlighting.
      </p>
      <p>
        What I've written here is probably long enough, but adding this final
        sentence can't hurt.
      </p>
      <pre>
        <code className="language-js">
          {`function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
} `}
        </code>
      </pre>
      <p>Hopefully that looks good enough to you.</p> */}

    </>
  );
};

export default SingleContentDemo;
