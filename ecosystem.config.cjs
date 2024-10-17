module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'dist/server/entry.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        HOST: '0.0.0.0',
      },
    },
  ],
};
