const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // server.get("/mask-url-router/:id", (req, res) => {
    //   const actualPage = "/test";
    //   const queryParams = { ppram: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get("/mask-url-router", (req, res) => {
      const actualPage = "/test";
      app.render(req, res, actualPage);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log(">>>> 시작됨");
    });
  })
  .catch(() => {
    console.errror("오류입니다.");
    process.exit(1);
  });
