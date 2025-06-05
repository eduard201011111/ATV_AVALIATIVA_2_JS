function comDelay() {
  console.log("3");
  setTimeout(() => {
    console.log("2");
  }, 2000);

  Promise.resolve().then(() => {
    console.log("1");
  });

  console.log("4");
}
function main() {
  console.log("8");
  comDelay();

  Promise.resolve().then(() => {
    console.log("6");
  });

  setTimeout(() => {
    console.log("5");
  }, 1000);

  console.log("7");
}
main();
