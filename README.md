# Run in Local Environment

## Prerequissites

Make sure you understand this article

[How To Write NodeJS REST API With Azure Functions — Typescript Version](https://medium.com/bb-tutorials-and-thoughts/how-to-write-nodejs-rest-api-with-azure-functions-typescript-version-3f412fa417a8?source=friends_link&sk=39b8f3fafc6426a00ea642e8668a3828)

## Clone the repository

```
 git clone https://BloomLMS@dev.azure.com/BloomLMS/Bloom/_git/app_bloom_teacher_api
```

## Install Dependencies

```
npm install

```

## add the local.settings.json file

```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "MONGO_CONNECTION_STRING": "mongodb+srv://Tester123:Tester123@cluster0.dc3nz.mongodb.net/Bloom?retryWrites=true&w=majority"
  }
}

```

## Run the Project

```
 npm start
```