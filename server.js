const app = require("./src/app");
const conectarDB = require("./src/database/db");

const PORT = 3001;

const main = async () => {
  try {
    await conectarDB();
    app.listen(PORT, () => {
      console.log(`Servidor en puerto ${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

main();
