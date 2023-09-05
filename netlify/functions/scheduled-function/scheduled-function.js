const { schedule } = require("@netlify/functions");
const fetch = require("node-fetch");

const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/6188f8f10a8230038486df0f";
// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule("0 1 * * *", async (event) => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response:", response);
  });

  return {
    statusCode: 200,
  };
});
