import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.5",
      addr: "0x6c9F1Ea31F84fBF715b000a29C36F707634e11d8"
    });
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Chemist Payments app
          </h1>
          <div className="">
            <div className="my-3">
              {
                // <input
                //type="text"
                //name="addr"
                //className="input input-bordered block w-full focus:ring focus:outline-none"
                //placeholder="Recipient Address"
                //>
              }
            </div>
            <div className="my-3">
              {
                //<input
                //name="ether"
                //type="text"
                //className="input input-bordered block w-full focus:ring focus:outline-none"
                //placeholder="Amount in ETH"
                ///>
              }
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button type="submit">
            {" "}
            <img src="https://blog.talkcharge.com/wp-content/uploads/2019/10/Dolo-650-tablets.jpg" />
          </button>
  <button type="submit">
            {" "}
            <img src="data:image/jpeg;base64,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" />
          </button>
          {
            //<button
            //type="submit"
            //className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            //>
            //Pay now
            //</button>
          }
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}
