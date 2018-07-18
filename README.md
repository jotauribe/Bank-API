# Running the application

- Download the code
- Navigate to inside the project folder on terminal
- Do an npm install for installing all the project dependencies
- Then npm start or node app.js or to get the app running on local host

  # Endpoints

  ## GET /clients/{id}

  Return the provider with the given id.

  ## POST /clients/

  This endpoint receive a JSON with the following structure: <br>

```json
{
  "id": "Number",
  "firstName": "String",
  "lastName": "Number",
  "birthdate": "String"
}
```

## POST /clients/{id}/employments

This endpoint receive a JSON with the following structure: <br>

```json
{
  "clientId": "Number",
  "company": "Object",
  "salary": "Number",
  "hireDate": "String"
}
```
