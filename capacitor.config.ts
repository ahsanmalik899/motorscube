import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.revnosoft.motorscube',
  appName: 'Motors Cube',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,  // Duration to show splash screen
      launchAutoHide: true,  // Auto hide splash screen after duration
      launchFadeOutDuration: 2000,  // Fade-out duration
      backgroundColor: "#ffffffff",  // White background for splash screen
      androidSplashResourceName: "splash_image",  // Use splash image (without extension)
      androidScaleType: "CENTER_CROP",  // Ensure image fills the screen (match parent)
      showSpinner: true,  // Show spinner while loading
      androidSpinnerStyle: "large",  // Spinner style
      iosSpinnerStyle: "small",  // Spinner style for iOS
      spinnerColor: "#999999",  // Spinner color
      splashFullScreen: true,  // Full screen splash
      splashImmersive: true,  // Immersive mode for Android
      useDialog: true,  // Use dialog for splash screen
    },
  },
};

export default config;
