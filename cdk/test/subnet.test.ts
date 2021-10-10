import * as cdk from "@aws-cdk/core";
import * as Cdk from "../lib/cdk-stack";
import {countResources, expect, haveResource} from "@aws-cdk/assert";

test('Subnet', () => {
    const app = new cdk.App();
    const stack = new Cdk.CdkStack(app, 'MyTestStack');

    expect(stack).to(countResources('AWS::EC2::Subnet', 4));
    expect(stack).to(haveResource('AWS::EC2::Subnet', {
        CidrBlock: '10.0.1.0/24',
        AvailabilityZone: "ap-northeast-1a",
        Tags: [{ 'Key': 'Name', 'Value': 'study-typescript-public-subnet-a' }]
    }));
    expect(stack).to(haveResource('AWS::EC2::Subnet', {
        CidrBlock: '10.0.2.0/24',
        AvailabilityZone: "ap-northeast-1c",
        Tags: [{ 'Key': 'Name', 'Value': 'study-typescript-public-subnet-c' }]
    }));
    expect(stack).to(haveResource('AWS::EC2::Subnet', {
        CidrBlock: '10.0.11.0/24',
        AvailabilityZone: "ap-northeast-1a",
        Tags: [{ 'Key': 'Name', 'Value': 'study-typescript-private-subnet-a' }]
    }));
    expect(stack).to(haveResource('AWS::EC2::Subnet', {
        CidrBlock: '10.0.12.0/24',
        AvailabilityZone: "ap-northeast-1c",
        Tags: [{ 'Key': 'Name', 'Value': 'study-typescript-private-subnet-c' }]
    }));
});
