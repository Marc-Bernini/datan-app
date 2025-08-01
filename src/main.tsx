import App from "@/App";
import { datanQueryClient } from "@/lib/tanstack/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={datanQueryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
