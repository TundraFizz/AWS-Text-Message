"use strict";

const AWS = require("aws-sdk");

function SMS(configAWS){
  configAWS = process.cwd() + "/" + configAWS;
  AWS.config.loadFromPath(configAWS);

  let config = require(configAWS);
  this.snsTopicArn = config.snsTopicArn;
  this.phoneNumber = config.phoneNumber;
  this.sns         = new AWS.SNS();

  // Subscribing a phone number to a topic
  this.sns.subscribe({
    "Protocol": "sms",
    "TopicArn": this.snsTopicArn,
    "Endpoint": this.phoneNumber
  }, function(error, data){if(error)console.log(error);});
}

SMS.prototype.Send = function(message){
  this.sns.publish({
    "TargetArn": this.snsTopicArn,
    "Message"  : message
  }, function(error, data){if(error)console.log(error);});
};

module.exports = (configAWS) => {return new SMS(configAWS)}
