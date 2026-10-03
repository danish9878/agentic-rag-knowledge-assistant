import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),
  API_KEY: Joi.string().required(),

  STORAGE_DRIVER: Joi.string().valid('local', 's3').default('local'),
  LOCAL_STORAGE_PATH: Joi.string().default('./storage'),

  MONGODB_URI: Joi.string().required(),

  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),

  QDRANT_URL: Joi.string().uri().default('http://localhost:6333'),

  ANTHROPIC_API_KEY: Joi.string().required(),
});
