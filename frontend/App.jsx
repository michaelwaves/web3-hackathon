import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';
import PatentDisplay from './components/PatentDisplay';


export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    getPatents()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }
    , []);

  React.useEffect(() => {
    console.log("valueFromBlockchain", valueFromBlockchain);
  }, [valueFromBlockchain]);
  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={"Welcome to NearIP"} onClick={() => wallet.signIn()} />;
  }

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;

    // use the wallet to send the greeting to the contract
    wallet.callMethod({ method: 'set_greeting', args: { message: greetingInput.value }, contractId })
      .then(async () => { return getPatents(); })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  function getPatents() {
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: 'get_patents', contractId })
  }

  const PatentComponents = valueFromBlockchain && valueFromBlockchain.map((patent, index) => {
    return (
      <PatentDisplay title={patent.title}
        number={patent.number}
        abstract={patent.abstract}
        filingDate={patent.filingDate}
        issueDate={patent.issueDate}
        inventors={patent.inventors}
        image={patent.drawing}
        buttonText={"View Patent"}
        onClick={() => window.open(patent.pdf)}
      />
    )
  });

  return (
    <>
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <div className='flex flex-col space-y-2'>
          <h1>Welcome to the Future of Patents! </h1>
          <p>Secure and effortless blockchain patent storage for Web3. Powered by the Near Protocol. </p>
          {!uiPleaseWait && PatentComponents || "Loading..."}
        </div>


        {/* <form onSubmit={changeGreeting} className="change">
          <label>Change greeting:</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form> */}

        {/*<EducationalText />*/}
      </main>
    </>
  );
}