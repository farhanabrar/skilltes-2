const express = require("express");
const app = express();
const port = 3000;

const { sequelize } = require("./models");
// sequelize.sync();
const routerTodo = require("./controllers/todo/todoRouter");
app.use(express.json());
app.use("/todo", routerTodo);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});