fetch("https://faithcare-backend.vercel.app/api/v1/prime/workforce", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ departmentToServeIn: ["INVALID"] })
})
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)));
