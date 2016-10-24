const MENTION_BASE_URL = 'https://web.mention.com';
const MENTION_URL_OAUTH = 'https://web.mention.net/oauth/v2/token';
const MENTION_API_URL = 'https://api.mention.net/api';

const CLIENT_ID = '954_j2ytjo1wxk0kg40owck4sk4scww40cwsgwo0c08skcoc4ocos';
const CLIENT_SECRET = 'oy56pg1mvv4cosw8wwkgo04ksskk04w8w4w0c4kwgg0w04gs4';

// Same URL than in Mention app configuration panel
// NOTE: Ideally put this value in an environment variable
const REDIRECT_URI = 'http://127.0.0.1:8888/callback';

const Config = () => ({
  baseUrl: MENTION_BASE_URL,
  oauthUrl: MENTION_URL_OAUTH,
  apiUrl: MENTION_API_URL,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
});

export default new Config();
