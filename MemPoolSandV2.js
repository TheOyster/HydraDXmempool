import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { ApiPromise, WsProvider } from "@polkadot/api";

const assets = [
  {
    id: "0",
    name: "HDX",
    symbol: "HDX",
    decimals: 12,
    icon: "HDX",
    type: "Token",
    existentialDeposit: "1000000000000",
    origin: undefined,
    meta: undefined,
  },
  {
    id: "1000021",
    name: "PINK",
    symbol: undefined,
    decimals: 18,
    icon: undefined,
    type: undefined,
    existentialDeposit: undefined,
    origin: undefined,
    meta: undefined,
  },
  {
    id: "26",
    name: "Nodle",
    symbol: "NODL",
    decimals: 11,
    icon: "NODL",
    type: "Token",
    existentialDeposit: "109890109890",
    origin: 2026,
    meta: undefined,
  },
  {
    id: "5",
    name: "Polkadot",
    symbol: "DOT",
    decimals: 10,
    icon: "DOT",
    type: "Token",
    existentialDeposit: "17540000",
    origin: undefined,
    meta: undefined,
  },
  {
    id: "10",
    name: "USDT (Polkadot Asset Hub)",
    symbol: "USDT",
    decimals: 6,
    icon: "USDT",
    type: "Token",
    existentialDeposit: "10000",
    origin: 1000,
    meta: undefined,
  },
  {
    id: "25",
    name: "Unique network",
    symbol: "UNQ",
    decimals: 18,
    icon: "UNQ",
    type: "Token",
    existentialDeposit: "1224384348939740000",
    origin: 2037,
    meta: undefined,
  },
  {
    id: "1000019",
    name: "DED",
    symbol: undefined,
    decimals: 10,
    icon: undefined,
    type: undefined,
    existentialDeposit: undefined,
    origin: undefined,
    meta: undefined,
  },
  {
    id: "12",
    name: "Zeitgeist",
    symbol: "ZTG",
    decimals: 10,
    icon: "ZTG",
    type: "Token",
    existentialDeposit: "1204151916",
    origin: 2092,
    meta: undefined,
  },
  {
    id: "1000010",
    name: "HDX Bond 24/10/2024",
    symbol: "HDXb",
    decimals: 12,
    icon: "HDX",
    type: "Bond",
    existentialDeposit: "1000000000000",
    origin: undefined,
    meta: undefined,
  },
  {
    id: "24",
    name: "Subsocial",
    symbol: "SUB",
    decimals: 10,
    icon: "SUB",
    type: "Token",
    existentialDeposit: "20000000",
    origin: 2101,
    meta: undefined,
  },
  {
    id: "1000014",
    name: undefined,
    symbol: undefined,
    decimals: undefined,
    icon: undefined,
    type: undefined,
    existentialDeposit: undefined,
    origin: undefined,
    meta: undefined,
  },
  {
    id: "1000013",
    name: "HDX Bond 04/01/2025",
    symbol: "HDXb",
    decimals: 12,
    icon: "HDX",
    type: "Bond",
    existentialDeposit: "1000000000000",
    origin: undefined,
    meta: undefined,
  },
  {
    id: "17",
    name: "Interlay",
    symbol: "INTR",
    decimals: 10,
    icon: "INTR",
    type: "Token",
    existentialDeposit: "6164274209",
    origin: 2032,
    meta: undefined,
  },
  {
    id: "14",
    name: "Bifrost Native Coin",
    symbol: "BNC",
    decimals: 12,
    icon: "BNC",
    type: "Token",
    existentialDeposit: "68795189840",
    origin: 2030,
    meta: undefined,
  },
  {
    id: "1000020",
    name: undefined,
    symbol: undefined,
    decimals: undefined,
    icon: undefined,
    type: undefined,
    existentialDeposit: undefined,
    origin: undefined,
    meta: undefined,
    name: "USDT, DAI, USDC, USDT",
    symbol: "100",
    decimals: 18,
    icon: "USDT/DAI/USDC/USDT",
    type: "StableSwap",
    existentialDeposit: "1000",
    origin: undefined,
    meta: { 10: "USDT", 18: "DAI", 21: "USDC", 23: "USDT" },
  },
  {
    id: "20",
    name: "Ethereum (Moonbeam Wormhole)",
    symbol: "WETH",
    decimals: 18,
    icon: "WETH",
    type: "Token",
    existentialDeposit: "5390835579515",
    origin: 2004,
    meta: undefined,
  },
  {
    id: "101",
    name: "iBTC, WBTC",
    symbol: "101",
    decimals: 18,
    icon: "iBTC/WBTC",
    type: "StableSwap",
    existentialDeposit: "1000",
    origin: undefined,
    meta: { 11: "iBTC", 19: "WBTC" },
  },
  {
    id: "16",
    name: "Glimmer",
    symbol: "GLMR",
    decimals: 18,
    icon: "GLMR",
    type: "Token",
    existentialDeposit: "34854864344868000",
    origin: 2004,
    meta: undefined,
  },
  {
    id: "15",
    name: "Bifrost Voucher DOT",
    symbol: "vDOT",
    decimals: 10,
    icon: "vDOT",
    type: "Token",
    existentialDeposit: "18761726",
    origin: 2030,
    meta: undefined,
  },
  {
    id: "13",
    name: "Centrifuge",
    symbol: "CFG",
    decimals: 18,
    icon: "CFG",
    type: "Token",
    existentialDeposit: "32467532467532500",
    origin: 2031,
    meta: undefined,
  },
  {
    id: "27",
    name: "Crust",
    symbol: "CRU",
    decimals: 12,
    icon: "CRU",
    type: "Token",
    existentialDeposit: "7874015748",
    origin: 2008,
    meta: undefined,
  },
  {
    id: "102",
    name: "USDT, USDC",
    symbol: "102",
    decimals: 18,
    icon: "USDT/USDC",
    type: "StableSwap",
    existentialDeposit: "1000",
    origin: undefined,
    meta: { 10: "USDT", 22: "USDC" },
  },
  {
    id: "8",
    name: "Phala",
    symbol: "PHA",
    decimals: 12,
    icon: "PHA",
    type: "Token",
    existentialDeposit: "54945054945",
    origin: 2035,
    meta: undefined,
  },
  {
    id: "9",
    name: "Astar",
    symbol: "ASTR",
    decimals: 18,
    icon: "ASTR",
    type: "Token",
    existentialDeposit: "147058823529412000",
    origin: 2006,
    meta: undefined,
  },
  {
    id: "1",
    name: "Lerna",
    symbol: "LRNA",
    decimals: 12,
    icon: "LRNA",
    type: "Token",
    existentialDeposit: "400000000",
    origin: undefined,
    meta: undefined,
  },
  {
    id: "18",
    name: "DAI (Moonbeam Wormhole)",
    symbol: "DAI",
    decimals: 18,
    icon: "DAI",
    type: "Token",
    existentialDeposit: "10000000000000000",
    origin: 2004,
    meta: undefined,
  },
  {
    id: "21",
    name: "USD Coin (Moonbeam Wormhole)",
    symbol: "USDC",
    decimals: 6,
    icon: "USDC",
    type: "Token",
    existentialDeposit: "10000",
    origin: 2004,
    meta: undefined,
  },
  {
    id: "23",
    name: "USDT (Moonbeam Wormhole)",
    symbol: "USDT",
    decimals: 6,
    icon: "USDT",
    type: "Token",
    existentialDeposit: "10000",
    origin: 2004,
    meta: undefined,
  },
  {
    id: "11",
    name: "interBTC",
    symbol: "iBTC",
    decimals: 8,
    icon: "iBTC",
    type: "Token",
    existentialDeposit: "36",
    origin: 2032,
    meta: undefined,
  },
  {
    id: "19",
    name: "Bitcoin (Moonbeam Wormhole)",
    symbol: "WBTC",
    decimals: 8,
    icon: "WBTC",
    type: "Token",
    existentialDeposit: "34",
    origin: 2004,
    meta: undefined,
  },
  {
    id: "22",
    name: "USDC (Polkadot Asset Hub)",
    symbol: "USDC",
    decimals: 6,
    icon: "USDC",
    type: "Token",
    existentialDeposit: "10000",
    origin: 1000,
    meta: undefined,
  },
  {
    id: "1000034",
    name: "STINK",
    symbol: "STINK",
    decimals: 10,
    icon: "STINK",
    type: "Token",
    existentialDeposit: "10000",
    origin: 1000,
    meta: undefined,
  },
];
const createAssetIdToSymbolMap = (assets) => {
  const map = {};
  assets.forEach((asset) => {
    if (asset.id && (asset.symbol || asset.name)) {
      map[asset.id] = {
        symbol: asset.symbol || asset.name,
        decimals: asset.decimals,
      };
    }
  });
  return map;
};

const assetIdToSymbol = createAssetIdToSymbolMap(assets);

const formatAmount = (amount, decimals) => {
  try {
    const amountBigInt = BigInt(amount);
    const divisor = BigInt(10 ** (decimals - 5));
    const divided = amountBigInt / divisor;
    const result = Number(divided) / 10 ** 5;
    return result.toFixed(5);
  } catch (error) {
    return "N/A";
  }
};

async function main() {
  const provider = new WsProvider("wss://rpc.hydradx.cloud");

  const api = await ApiPromise.create({ provider });
  console.log("Connected to HydraDX");

  const attackersFilePath = path.join(__dirname, "attackers.txt");

  await api.rpc.chain.subscribeNewHeads(async (header) => {
    console.log(`New block: #${header.number}`);
    const pendingExtrinsics = await api.rpc.author.pendingExtrinsics();
    console.log(`Pending Transactions in Mempool: ${pendingExtrinsics.length}`);

    const attackers = new Set();
    const sandwichAttacks = [];

    pendingExtrinsics.forEach((extrinsic, index) => {
      const { method } = extrinsic;
      const methodInfo = `${method.section}.${method.method}`;

      // Skip unnecessary methods
      if (
        [
          "xTokens.transferMultiassets",
          "democracy.vote",
          "xTokens.transfer",
          "balances.transferKeepAlive",
          "xTokens.transferMultiasset",
          "democracy.delegate",
          "omnipool.addLiquidity",
          "multiTransactionPayment.setCurrency",
          "staking.unstake",
        ].includes(methodInfo)
      ) {
        return;
      }

      const signerInfo = extrinsic.signer
        ? extrinsic.signer.toString()
        : "Unknown signer";
      const tipInfo = extrinsic.tip ? extrinsic.tip.toHuman() : "No tip";

      console.log(`Pending Tx #${index + 1}:`);
      console.log(`  Method: ${methodInfo}`);
      console.log(`  Signer: ${signerInfo}`);
      console.log(`  Tip: ${tipInfo}`);

      if (
        ["omnipool.buy", "router.buy", "omnipool.sell", "router.sell"].includes(
          methodInfo
        )
      ) {
        const assetInId = method.args[0].toString();
        const assetOutId = method.args[1].toString();
        const assetIn =
          assetIdToSymbol[assetInId]?.symbol || `Asset ID: ${assetInId}`;
        const assetOut =
          assetIdToSymbol[assetOutId]?.symbol || `Asset ID: ${assetOutId}`;
        const amountIn = formatAmount(
          method.args[2].toString(),
          assetIdToSymbol[assetInId]?.decimals || 0
        );
        const minAmountOut = formatAmount(
          method.args[3].toString(),
          assetIdToSymbol[assetOutId]?.decimals || 0
        );

        console.log(`  Asset In: ${assetIn}`);
        console.log(`  Asset Out: ${assetOut}`);
        console.log(
          `  Amount In: ${
            amountIn === "N/A"
              ? method.args[2].toString()
              : `${amountIn} (${method.args[2].toString()})`
          }`
        );
        console.log(
          `  Min Amount Out: ${
            minAmountOut === "N/A"
              ? method.args[3].toString()
              : `${minAmountOut} (${method.args[3].toString()})`
          }`
        );

        // Check for sandwich attack conditions
        if (index > 0 && index < pendingExtrinsics.length - 1) {
          const prevExtrinsic = pendingExtrinsics[index - 1];
          const nextExtrinsic = pendingExtrinsics[index + 1];

          const prevMethodInfo = `${prevExtrinsic.method.section}.${prevExtrinsic.method.method}`;
          const nextMethodInfo = `${nextExtrinsic.method.section}.${nextExtrinsic.method.method}`;

          try {
            const prevAssetInId = prevExtrinsic.method.args[0].toString();
            const prevAssetOutId = prevExtrinsic.method.args[1].toString();
            const nextAssetInId = nextExtrinsic.method.args[0].toString();
            const nextAssetOutId = nextExtrinsic.method.args[1].toString();

            if (
              prevMethodInfo === methodInfo &&
              nextMethodInfo === methodInfo &&
              prevAssetInId === assetInId &&
              prevAssetOutId === assetOutId &&
              nextAssetInId === assetOutId &&
              nextAssetOutId === assetInId
            ) {
              const prevSignerInfo = prevExtrinsic.signer
                ? prevExtrinsic.signer.toString()
                : "Unknown signer";
              const nextSignerInfo = nextExtrinsic.signer
                ? nextExtrinsic.signer.toString()
                : "Unknown signer";

              console.log(
                `SANDWICH ATTACK DETECTED!\n` +
                  `  Attacker (Buy): ${prevSignerInfo}\n` +
                  `  Victim: ${signerInfo}\n` +
                  `  Attacker (Sell): ${nextSignerInfo}`
              );

              attackers.add(prevSignerInfo);
              attackers.add(nextSignerInfo);

              sandwichAttacks.push({
                block: header.number.toString(),
                attackerBuy: prevSignerInfo,
                victim: signerInfo,
                attackerSell: nextSignerInfo,
                assetIn,
                assetOut,
                amountIn,
                minAmountOut,
              });
            }
          } catch (error) {
            // Ignore the error and continue execution
          }
        }
      } else {
        // Generic handling for other methods
        method.args.forEach((arg, argIndex) => {
          const argValue = arg.toString();
          const readableArg = assetIdToSymbol[argValue]?.symbol || argValue;
          console.log(`  Arg #${argIndex + 1}: ${readableArg}`);
        });
      }
      console.log("-----------------------------------------");
    });

    // Append the attacker wallet addresses and transaction details to the file
    if (sandwichAttacks.length > 0) {
      const attackerData = sandwichAttacks
        .map(
          (attack) =>
            `Block: ${attack.block}\n` +
            `Attacker (Buy): ${attack.attackerBuy}\n` +
            `Victim: ${attack.victim}\n` +
            `Attacker (Sell): ${attack.attackerSell}\n` +
            `Asset In: ${attack.assetIn}\n` +
            `Asset Out: ${attack.assetOut}\n` +
            `Amount In: ${attack.amountIn}\n` +
            `Min Amount Out: ${attack.minAmountOut}\n`
        )
        .join("\n");

      fs.appendFileSync(attackersFilePath, attackerData + "\n");
    }
  });
}
main().catch(console.error);
