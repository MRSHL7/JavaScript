function display(task) {
  return new Promise((resolve, reject) => {
    if (task) {
      setTimeout(() => {
        resolve("Task Completed Successfully");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Error Occured");
      }, 3000);
    }
  });
}

display(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
