const keyTest = async () => {
  const response = await fetch("/.netlify/functions/variableTest")
  .then(response => response.json())
  console.log(JSON.stringify(response))
};

keyTest();