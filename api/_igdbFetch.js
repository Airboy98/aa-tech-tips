const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_IGDB;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_IGDB;

let accessToken = process.env.REACT_APP_CLIENT_TOKEN_IGDB;

const refreshToken = async () => {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
    { method: "POST" }
  );
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Failed to refresh IGDB token: ${JSON.stringify(data)}`);
  }
  accessToken = data.access_token;
};

export const igdbFetch = async (url, body, isRetry = false) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Client-ID": CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
    body,
  });

  if (response.status === 401 && !isRetry) {
    await refreshToken();
    return igdbFetch(url, body, true);
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`IGDB error ${response.status}: ${JSON.stringify(data)}`);
  }

  if (!Array.isArray(data)) {
    throw new Error(`Unexpected IGDB response: ${JSON.stringify(data)}`);
  }

  return data;
};
