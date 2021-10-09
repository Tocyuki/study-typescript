import {expect, haveResource, countResources} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Cdk from '../lib/cdk-stack';

test('Vpc', () => {
    const app = new cdk.App();
    const stack = new Cdk.CdkStack(app, 'MyTestStack');

    expect(stack).to(countResources('AWS::EC2::VPC', 1));
    expect(stack).to(haveResource('AWS::EC2::VPC', {
        CidrBlock: '10.0.0.0/16',
        Tags: [{
            'Key': 'Name', 'Value': 'study-typescript-vpc'
        }]
    }));
});
