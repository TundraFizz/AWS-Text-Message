# AWS Text Message

## Usage

1. Install the package

```
npm i aws-text-message
```

2. Create a .json configuration file

```json
{
  "region"         : "us-west-2",
  "accessKeyId"    : "XXXXXXXXXXXXXXXXXXXX",
  "secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "snsTopicArn"    : "arn:aws:sns:us-west-2:XXXXXXXXXXXX:Example",
  "phoneNumber"    : "+1 555 123 4567"
}
```

3. Require the module, specifying the .json config file

```js
const SMS = require("aws-text-message")("aws-config.json");

SMS.Send("Hello world");
```

## Methods

##### Send(message)
`message`: The message that will be sent to the phone number that was setup in the config file

## ToDo

* Allow the config file to be YAML in addition to JSON
* Improve versatility of initializing and changing the properties
