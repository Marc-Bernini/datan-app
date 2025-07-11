/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DATAN_APP: string;
    readonly VITE_DATAN_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
