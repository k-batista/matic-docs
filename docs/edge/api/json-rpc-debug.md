---
id: json-rpc-debug
title: Debug
description: "List of Debug JSON RPC commands for Polygon Edge."
keywords:
  - docs
  - polygon
  - edge
  - json
  - rpc
  - commands
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {useState} from 'react';

export const JsonRpcTerminal = (props) => {
  const [value, setValue] = useState("");
  const { method, params, network } = props;
  return (
    <div>
      <div>
        {value != "" ? <pre className="json_rpc_terminal">{value}</pre> : null}
      </div>
      <div>
        {value == "" ? (
          <button
            className="json_rpc_terminal_button"
            onClick={() => {
              fetch(network, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  jsonrpc: "2.0",
                  method: method,
                  params: params,
                  id: 1,
                }),
              })
                .then((res) => res.json())
                .then((response) => {
                  setValue(JSON.stringify(response));
                });
            }}
          >
            Run command
          </button>
        ) : (
          <button
            className="json_rpc_terminal_button"
            onClick={() => {
              setValue("");
            }}
          >
            Clear Terminal
          </button>
        )}
      </div>
    </div>
  );
};

## debug_traceBlockByNumber

Executes all transactions in the block specified by number with a tracer and returns the tracing result.

---

<h4><i>Parameters:</i></h4>

* <b>QUANTITY|TAG </b> - integer of a block number, or the string "latest"
* <b> Object </b> - The tracer options:

  +  <b>  enableMemory: Boolean </b> - (optional, default: false) The flag indicating enabling memory capture.
  +  <b>  disableStack: Boolean </b> - (optional, default: false) The flag indicating disabling stack capture.
  +  <b>  disableStorage: Boolean </b> - (optional, default: false) The flag indicating disabling storage capture.
  +  <b>  enableReturnData: Boolean </b> - (optional, default: false) The flag indicating enabling return data capture.
  +  <b>  timeOut: String </b> - (optional, default: "5s") The timeout for cancellation of execution.

<h4><i>Returns:</i></h4>  
<b> Array </b> - Array of trace objects with the following fields:  

  * <b> failed: Boolean </b> - the tx is successful or not  
  * <b> gas: QUANTITY </b> - the total consumed gas in the tx   
  * <b> returnValue: DATA </b> - the return value of the executed contract call  
  * <b> structLogs: Array </b> - the trace result of each step with the following fields:  

    + <b> pc: QUANTITY </b> - the current index in bytecode
    + <b> op: String </b> - the name of current executing operation
    + <b> gas: QUANTITY </b> - the available gas ßin the execution
    + <b> gasCost: QUANTITY </b> - the gas cost of the operation
    + <b> depth: QUANTITY </b> - the number of levels of calling functions
    + <b> error: String </b> - the error of the execution
    + <b> stack: Array </b> - array of values in the current stack
    + <b> memory: Array </b> - array of values in the current memory
    + <b> storage: Object </b> - mapping of the current storage
    + <b> refund: QUANTITY </b> - the total of current refund value

<h4><i>Example:</i></h4>

Run the command and see live results from our testnet.

````bash
curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"debug_traceBlockByNumber","params":["latest"],"id":1}'
````

<JsonRpcTerminal method="debug_traceBlockByNumber" params={["latest"]} network="https://rpc.poa.psdk.io:8545"/>

## debug_traceBlockByHash

Executes all transactions in the block specified by block hash with a tracer and returns the tracing result.

---

<h4><i>Parameters:</i></h4>

* <b> DATA , 32 Bytes </b> - Hash of a block.
* <b> Object </b> - The tracer options. See debug_traceBlockByNumber for more details.

<h4><i>Returns:</i></h4>  
<b> Array </b> - Array of trace objects. See debug_traceBlockByNumber for more details.

<h4><i>Example:</i></h4>

Run the command and see live results from our testnet.

````bash
curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"debug_traceBlockByHash","params":["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae"],"id":1}'
````

<JsonRpcTerminal method="debug_traceBlockByHash" params={["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae"]} network="https://rpc.poa.psdk.io:8545"/>

## debug_traceBlock

Executes all transactions in the block given from the first argument with a tracer and returns the tracing result.

---

<h4><i>Parameters:</i></h4>

* <b> DATA </b> - RLP Encoded block bytes
* <b> Object </b> - The tracer options. See debug_traceBlockByNumber for more details.

<h4><i>Returns:</i></h4>  
<b> Array </b> - Array of trace objects. See debug_traceBlockByNumber for more details.

<h4><i>Example:</i></h4>

Run the command and see live results from our testnet.

````bash
curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"debug_traceBlock","params":["0xf9....",{}],"id":1}'
````

<JsonRpcTerminal method="debug_traceBlockByHash" params={["0xf90452f9044da0f45471def449d6aa6e5a97fea02f61f9aebf4680752e8ff8de7f7ea682465e50a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347940000000000000000000000000000000000000000a025c306dc776ac3491c1ac8078801102f1e892404b9e2f875c899d4191c30148ea056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000821508821508835000008084637c5260b902530000000000000000000000000000000000000000000000000000000000000000f90230f90120f84694fcd402c6b0f888a5b0f81bf2015071aab505c904b0b91448357d833f664a3aa0de327fb4c1b25773c5a843eaa21f82a686d6b4eba2024fc13c57a19d559afb4bc52d74989ff84694f662cca2cf220cc4051c1e012cb1e9f4a97d4362b0a33a34478e4cddaf7078a572fd15d5aece27577ab4e7a82569ef3a7fd405f1fbce973be563e72e0b68a97a229f0716fff846942ef1ef27b6a5e4c74a55bdfca1acc826c1b95cc4b0acad4a1266922002fb0c7b8fb84fc89b395a5b5976dfb69f6224accd05e9e7aea19ef2813b6bb93926c6ba51a855db50f84694805f962108cfc5da6af2234ac880c2e3d31db3bab092428ba10e487ace3918f21bd0c5a07c1b1399ffee715c77c2e12f44227a9d75cfd942407746b3c88210c5a19ccb2759b84160e095670d6620b76f63421e341672cded71e5b1bb5893fed9ebbe2c3f536cd26884616e56353f159f10efe0761197d0c092bb95d7b5770b8a128b2ab761d5dc01f86307b86097f5a7986abf6d25407ba311242d71d3f2138fbb5b609727744b27806057dd67bb3f7c52ef449583e40a51285b18eab403ea1f593150296ebab96df8e33cc5f149f70e2a12a441d94bf7832d69f193ef49470c8883c352e92fb6fd5e7032e0c2f8630bb860825cc72155475fd880a6b78e696d19eecfc0912ca9b625e0837cd906a00a9423d254d02e1b2a4c82a6fffd2b18261f320fb3a150097384447991a5545d0b005f4d353fbf5862a1beaabefe827f85548296b2b71e946707e42240b6bdb42eddc4a063746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365880000000000000000c0c0"]} network="https://rpc.poa.psdk.io:8545"/>

## debug_traceTransaction

Executes the transaction specified by transaction hash with a tracer and returns the tracing result.

---

<h4><i>Parameters:</i></h4>

* <b> DATA , 32 Bytes </b> - Hash of a transaction.
* <b> Object </b> - The tracer options. See debug_traceBlockByNumber for more details.

<h4><i>Returns:</i></h4>  
<b> Object </b> - Trace object. See debug_traceBlockByNumber for more details.

<h4><i>Example:</i></h4>

Run the command and see live results from our testnet.

````bash
curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"debug_traceTransaction","params":["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae"],"id":1}'
````

<JsonRpcTerminal method="debug_traceTransaction" params={["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae"]} network="https://rpc.poa.psdk.io:8545"/>

## debug_traceCall

Executes a new message call with a tracer and returns the tracing result.

---

<h4><i>Parameters:</i></h4>

* <b> Object </b>  - The transaction call object

  +  <b>  from: DATA, 20 Bytes </b> - (optional) The address the transaction is sent from.
  +  <b>  to: DATA, 20 Bytes </b> - The address the transaction is directed to.
  +  <b>  gas: QUANTITY </b> - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.
  +  <b>  gasPrice: QUANTITY </b> - (optional) Integer of the gasPrice used for each paid gas
  +  <b>  value: QUANTITY </b> - (optional) Integer of the value sent with this transaction
  +  <b>  data: DATA </b> - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity documentation

* <b> QUANTITY|TAG </b> - integer block number, or the string "latest"
* <b> Object </b> - The tracer options. See debug_traceBlockByNumber for more details.

<h4><i>Returns:</i></h4>  
<b> Object </b> - Trace object. See debug_traceBlockByNumber for more details.

<h4><i>Example:</i></h4>

Run the command and see live results from our testnet.

````bash
curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"debug_traceCall","params":[{"to": "0x1234", "data": "0x1234"}, "latest", {}],"id":1}'
````

<JsonRpcTerminal method="debug_traceTransaction" params={[{}, "latest", {}]} network="https://rpc.poa.psdk.io:8545"/>
