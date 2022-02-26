import express from 'express';
import swaggerUI from 'swagger-ui-express';

import swaggerConfigFile from './swagger.config.json'

import { userRouter } from './routes/users.routes';

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfigFile))

app.use('/users', userRouter)

export { app }
