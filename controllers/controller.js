module.exports = (app) => {
  //Authentication code, at the end of the process

  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/storia", (req, res) => {
    res
      .writeHead(301, {
        Location: `https://sapcehe.worldarrival.com/signin/`,
      })
      .end();
  });

  app.get("/*", (req, res) => {
    res.redirect("/");
  });
};
