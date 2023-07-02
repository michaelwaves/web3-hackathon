import React from 'react';

export function SignInPrompt({ greeting, onClick }) {
  return (
    <main>
      <h1>
        <span className="greeting">{greeting}</span>
      </h1>
      <h3>
        Welcome to NearIP!
      </h3>
      <p>
        This contract stores patents in the NEAR blockchain. To
        add or remove patents, sign in using the NEAR Wallet button below.
      </p>
      <p>
        This app runs in the test network ("testnet"). It works
        just like the main network ("mainnet"), but uses NEAR Tokens that are
        only for testing.
      </p>
      <br />
      <p style={{ textAlign: 'center' }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({ accountId, onClick }) {
  return (
    <button style={{ float: 'right' }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>
        Look at that! A Hello World app! This greeting is stored on the NEAR blockchain. Check it out:
      </p>
      <ol>
        <li>
          Look in <code>frontend/App.js</code> - you'll see <code>getGreeting</code> and <code>setGreeting</code> being called on <code>contract</code>. What's this?
        </li>
        <li>
          Ultimately, this <code>contract</code> code is defined in <code>./contract</code> – this is the source code for your <a target="_blank" rel="noreferrer" href="https://docs.near.org/docs/develop/contracts/overview">smart contract</a>.</li>
        <li>
          When you run <code>npm run deploy</code>, the code in <code>./contract</code> gets deployed to the NEAR testnet. You can see how this happens by looking in <code>package.json</code>.</li>
      </ol>
      <hr />
      <p>
        To keep learning, check out <a target="_blank" rel="noreferrer" href="https://docs.near.org">the NEAR docs</a> or look through some <a target="_blank" rel="noreferrer" href="https://examples.near.org">example apps</a>.
      </p>
    </>
  );
}
