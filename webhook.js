const MP_SANDBOX_TOKEN = process.env.MP_const MP_SANDBOX_TOKEN = process.env.MP_APP_USR-3004516263956608-101115-8a170cc1bc73879644a5318b0091b712-2340972678 ;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const authHeader = req.headers['authorization'] || '';
  if (authHeader !== `Bearer ${MP_SANDBOX_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  console.log("📩 Webhook recebido:", req.body);

  res.status(200).json({ status: "ok" });
}
;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const authHeader = req.headers['authorization'] || '';
  if (authHeader !== `Bearer ${MP_SANDBOX_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  console.log("📩 Webhook recebido:", req.body);

  res.status(200).json({ status: "ok" });
}
const MP_SANDBOX_TOKEN = process.env.MP_const MP_SANDBOX_TOKEN = process.env.MP_APP_USR-3004516263956608-101115-8a170cc1bc73879644a5318b0091b712-2340972678 ;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const authHeader = req.headers['authorization'] || '';
  if (authHeader !== `Bearer ${MP_SANDBOX_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  console.log("📩 Webhook recebido:", req.body);

  res.status(200).json({ status: "ok" });
}
;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const authHeader = req.headers['authorization'] || '';
  if (authHeader !== `Bearer ${MP_SANDBOX_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  console.log("📩 Webhook recebido:", req.body);

  res.status(200).json({ status: "ok" });
}

