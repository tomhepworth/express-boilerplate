#### Dev run

```yarn run devstart``` == ```nodemon app.js```

#### .env

.env file must be used but they are excluded by the .gitignore

Currently only server port is defined in .env, but we might need it later for token secrets & other hosting settings

*.env:*
```NODE_SERVER_PORT=3000```