import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-legal-bear-31660.upstash.io',
  token: process.env.REDIS_KEY!,
});