import { Router } from 'express';
import { getApiKey, tryLogin, validateApiKey } from '../database/user';

const router = Router();

router.post('/api/user/login', async (req, res) => {
  const data = req.body;
  const success = await tryLogin(data.username, data.password);
  if (!success) {
    res.send({ success });
    return;
  }
  res.send({ success, apiKey: await getApiKey(data.username) });
});
router.post('/api/user/validate-key', async (req, res) => {
  const data = req.body;
  const success = await validateApiKey(data.username, data.apiKey);
  res.send({ success });
});

export default router;
