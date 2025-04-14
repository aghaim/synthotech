declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, parameters: {
        sitekey: string;
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
      }) => void;
    };
  }
}

export {}; 