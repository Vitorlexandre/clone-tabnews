import database from "infra/database.js";

async function status(request, response) {
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
