import { Stack, StackProps }from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ContainerImage } from "aws-cdk-lib/aws-ecs";

import path from "path";

export class ImageStack extends Stack {
  modelApp: ContainerImage;
  streamlitApp: ContainerImage;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.modelApp = ContainerImage.fromAsset(path.join(__dirname, "../assets/model-app"))
    this.streamlitApp = ContainerImage.fromAsset(path.join(__dirname, "../assets/streamlit-app"))
  }
}
