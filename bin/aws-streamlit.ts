#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageStack } from "../lib/image-stack";
import { FargateStack } from "../lib/fargate-stack";

const app = new cdk.App();
const imageStack = new ImageStack(app, 'ImageStack');
new FargateStack(app, 'FargateStack', { imageStack });
