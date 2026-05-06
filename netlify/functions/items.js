exports.handler = async function () {

try {

```
const response = await fetch(
  "https://api.loyverse.com/v1.0/items",
  {
    headers: {
      Authorization: "Bearer ea72d0bcfe4a438aad213a106c9aea46"
    }
  }
);

const data = await response.text();

return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  body: data
};
```

} catch(error) {

```
return {
  statusCode: 500,
  body: JSON.stringify({
    error: error.toString()
  })
};
```

}

};
