// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.scss';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { 
  createConfig, 
  webSocket 
} from 'wagmi'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, polygon, xdc, sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react';

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '7e5e567c58b68069a3e1a0758b38219a'

// 2. Create wagmiConfig
const metadata = {
  name: 'FundChain Web3Modal',
  description: 'Web3Modal for FundChain',
  url: 'https://k4lg5-iiaaa-aaaag-qjurq-cai.icp0.io/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const bbtestnet = {
  id: 17142,
  name: "beautiful-magneto-aa453d68",
  network: "bbtestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Native Token",
    symbol: "Native Token",
  },
  rpcUrls: {
    public: { http: ["https://rpc.buildbear.io/beautiful-magneto-aa453d68"] },
    default: { http: ["https://rpc.buildbear.io/beautiful-magneto-aa453d68"] },
  },
  blockExplorers: {
    etherscan: {
      name: "BBExplorer",
      url: "https://explorer.buildbear.io/beautiful-magneto-aa453d68",
    },
    default: {
      name: "BBExplorer",
      url: "https://explorer.buildbear.io/beautiful-magneto-aa453d68",
    },
  },
} as const;

const chains = [mainnet, bbtestnet] as const
const config = defaultWagmiConfig({
  chains: [mainnet, sepolia, bbtestnet], 
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, 
  enableOnramp: true, 
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#2d2d2d',
  }
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);