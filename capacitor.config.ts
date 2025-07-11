import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "fr.datan.app",
    appName: "datan",
    webDir: "dist",
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: true,
            launchFadeOutDuration: 100,
            backgroundColor: "#ffffffff",
            androidSplashResourceName: "splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: true,
            androidSpinnerStyle: "large",
            iosSpinnerStyle: "small",
            spinnerColor: "#999999",
            splashFullScreen: true,
            splashImmersive: true,
            layoutName: "launch_screen",
            useDialog: true,
        },
    },
};

export default config;
