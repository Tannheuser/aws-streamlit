import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ImageStack } from "./image-stack";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";
import { Cluster, FargateTaskDefinition, LogDrivers } from "aws-cdk-lib/aws-ecs";
import { prefixResource } from "./utils";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { ApplicationProtocol } from "aws-cdk-lib/aws-elasticloadbalancingv2";

export interface FargateStackProps extends StackProps {
    imageStack: ImageStack;
}

export class FargateStack extends Stack {
    constructor(scope: Construct, id: string, props?: FargateStackProps) {
        super(scope, id, props);

        const cluster = new Cluster(this, prefixResource('cluster'), {
            clusterName: prefixResource('cluster'),
            containerInsights: true,
        });

        const taskDefinition = new FargateTaskDefinition(
            this,
            prefixResource('task-definition'),
        );

        taskDefinition.addContainer(prefixResource("model-app-container"), {
            image: props!.imageStack.modelApp,
            logging: LogDrivers.awsLogs({
                streamPrefix: id,
                logRetention: RetentionDays.ONE_YEAR,
            }),
            readonlyRootFilesystem: true,
            portMappings: [{containerPort: 80}],
        });

        // taskDefinition.addContainer(prefixResource("streamlit-app-container"), {
        //     image: props!.imageStack.streamlitApp,
        //     logging: LogDrivers.awsLogs({
        //         streamPrefix: id,
        //         logRetention: RetentionDays.ONE_YEAR,
        //     }),
        //     readonlyRootFilesystem: true,
        //     portMappings: [{containerPort: 8501}],
        // });

        const fargateService = new ApplicationLoadBalancedFargateService(
            this,
            prefixResource("fargate-service"),
            {
                assignPublicIp: true,
                cluster: cluster,
                cpu: 256,
                desiredCount: 1,
                loadBalancerName: prefixResource('load-balancer'),
                memoryLimitMiB: 512,
                protocol: ApplicationProtocol.HTTP,
                publicLoadBalancer: true,
                taskDefinition,
            }
        );
    }
}
