# AWS Streamlit App

This is a proof of concept of AWS CDK application that deploys and hosts a single (dummy)
[Streamlit](https://github.com/streamlit/streamlit?tab=readme-ov-file#quickstart) application. This application communicates with a 'Hello World' model
(dummy algorithm) hosted on a separate AWS service.


## Architecture overview

![alt text](https://github.com/Tannheuser/aws-streamlit/blob/main/misc/diagram-poc.png?raw=true)

## Configuration

By default, `[default]` AWS profile is used for AWS CDK configuration.
If you want to use another named profile, you could specify it in `cdk.json` file as`"profile": "your_profile_name"`
or provide a `--profile your_profile_name` parameter to AWS CDK commands.

## Installation

Make sure you have `typescript` and `Docker` installed.

For the first time run cdk bootstrap command:

```console
npx cdk bootstrap
```

Run cdk synth to synthesize an AWS CloudFormation template:

```console
npx cdk synth
```

Run cdk deploy:

```console
npx cdk deploy
```

Specify a named profile parameter to AWS CDK commands if needed
```console
npx cdk command_name --profile your_profile_name
```

## Other useful commands
* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

