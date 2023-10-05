const target = 'https://0959d989713d086a06ce7fd15f2cfec7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@039337-2.myshopify.com';

export default [
  {
    context: [
      '/api'
    ],
    target,
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: function (path, req) {
      const newPath = `${target}${path}`;
      console.log('Rewrating path', `${req.url} -> ${newPath} for method ${req.method}`)
      return newPath;
    }
  }
]
