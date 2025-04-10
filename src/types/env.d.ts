declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
    DATABASE_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    ALPHA_VANTAGE_API_KEY: string;
    WORLD_BANK_API_KEY: string;
    IMF_API_KEY: string;
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: string;
    NEXT_PUBLIC_ENABLE_BETA_FEATURES: string;
    NEXT_PUBLIC_MAINTENANCE_MODE: string;
    REDIS_URL: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    EMAIL_FROM: string;
  }
} 