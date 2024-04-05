async function iterateWithAsyncAwait(array) {
  for (const value of array) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(value);
  }
}

async function awaitCall() {
  try {
    const data = await fetchDataFromAPI();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data from the API:", error.message);
  }
}

async function chainedAsnycfunctions() {
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }

  async function asyncFunction1() {
    await delay(1000);
    console.log("Async Function 1");
  }

  async function asyncFunction2() {
    await delay(1000);
    console.log("Async Function 2");
  }

  async function asyncFunction3() {
    await delay(1000);
    console.log("Async Function 3");
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Call the chainedAsyncFunctions function
  chainedAsyncFunctions();
}

async function concurrentRequests() {
    try {
        // Make two API requests concurrently using Promise.all()
        const [result1, result2] = await Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()]);

        // Log the combined results after both requests have resolved
        console.log("Combined Results:");
        console.log("Result 1:", result1);
        console.log("Result 2:", result2);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function parallelCalls(urls) {
    try {
        // Fetch data from each URL concurrently using Promise.all()
        const responses = await Promise.all(urls.map(url => fetch(url)));

        // Convert responses to JSON
        const data = await Promise.all(responses.map(response => response.json()));

        // Log the responses once all requests are complete
        console.log("Responses:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
