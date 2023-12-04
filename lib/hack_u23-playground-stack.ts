import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HackU23PlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Create a simple API sample
    const api = new apigw.RestApi(this, 'HackU23PlaygroundApi');

    // Handle requests with AWS Lambda
    const getSomething = new lambda.Function(this, 'HackU23PlaygroundLambdaGetSomething', {
      runtime: lambda.Runtime.NODEJS_LATEST,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/getSomething'),
      logRetention: 7,
    });

    const postSomething = new lambda.Function(this, 'HackU23PlaygroundLambdaPostSomething', {
      runtime: lambda.Runtime.NODEJS_LATEST,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda/postSomething'),
      logRetention: 7,
    });

    //These are like this
    //https://some-custom-domain: GET
    //https://some-custom-domain: POST
    api.root.addMethod('GET', new apigw.LambdaIntegration(getSomething));
    api.root.addMethod('POST', new apigw.LambdaIntegration(postSomething));
    // if u want to add a resource,just like this
    //https://some-custom-domain/hoge: GET
    // const getSomethingHoge = new lambda.Function(this, 'HackU23PlaygroundLambdaGetSomethingHoge', {
    //   runtime: lambda.Runtime.NODEJS_LATEST,
    //   handler: 'index.handler',
    //   code: lambda.Code.fromAsset('lambda/hoge/getSomething'),
    // });
    // api.root.addResource('hoge').addMethod('GET', new apigw.LambdaIntegration(getSomething));
  }
}
