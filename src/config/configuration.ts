export type StorageConfig = {
  driver: 'local' | 's3';
  localPath: string;
};

export type MongoDbConfig = {
  uri: string;
};

export type RedisConfig = {
  host: string;
  port: number;
};

export type QdrantConfig = {
  url: string;
};

export type AnthropicConfig = {
  apiKey: string;
};

export type AppConfig = {
  nodeEnv: string;
  port: number;
  apiKey: string;
  storage: StorageConfig;
  mongodb: MongoDbConfig;
  redis: RedisConfig;
  qdrant: QdrantConfig;
  anthropic: AnthropicConfig;
};

export default (): AppConfig => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
  apiKey: process.env.API_KEY || '',
  storage: {
    driver: process.env.STORAGE_DRIVER === 's3' ? 's3' : 'local',
    localPath: process.env.LOCAL_STORAGE_PATH || './storage',
  },
  mongodb: {
    uri: process.env.MONGODB_URI || '',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
  },
  qdrant: {
    url: process.env.QDRANT_URL || 'http://localhost:6333',
  },
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY || '',
  },
});
