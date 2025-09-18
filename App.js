import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "wagmi/chains";

// Custom wagmi config without projectId
const config = createConfig({
  connectors: [injected({ chains: [mainnet] })],
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

// React Query client
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={[mainnet]}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <ConnectButton />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
