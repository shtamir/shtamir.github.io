// api/admin-reset.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }
  console.log(`Inside reset handler`);
  console.log(`Request method: ${req.method}`);

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  const response = await fetch(`${redisUrl}/set/admin_present/false`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
    },
  });

  return res.status(200).json({ status: 'Admin presence cleared' });
}
