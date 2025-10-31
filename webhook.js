import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  try {
    const { action, data } = req.body;

    console.log("📩 Webhook recebido:", action, data);

    if (action === "payment.updated" && data?.id) {
      const paymentId = data.id;

      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.APP_USR-3004516263956608-101115-8a170cc1bc73879644a5318b0091b712-2340972678 }`,
          },
        }
      );

      const status = response.data.status;
      console.log("💰 Status do pagamento:", status);

      const ESP_IP = process.env.ESP_IP || "http://192.168.0.120";

      if (status === "approved") {
        console.log("✅ Pagamento aprovado — enviando comando /liberar");
        await axios.get(`${ESP_IP}/liberar`);
      } else if (
        status === "cancelled" ||
        status === "rejected" ||
        status === "expired"
      ) {
        console.log("❌ Pagamento cancelado/expirado — enviando comando /reset");
        await axios.get(`${ESP_IP}/reset`);
      }
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error("⚠️ Erro no webhook:", error.message);
    res.status(500).send("Erro interno");
  }
}
