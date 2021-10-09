import * as cdk from '@aws-cdk/core';
import { CfnVPC, CfnSubnet } from '@aws-cdk/aws-ec2';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new CfnVPC(this, 'Vpc', {
      cidrBlock: '10.0.0.0/16',
      tags: [{ key: 'Name', value: 'study-typescript-vpc' }]
    });

    const publicSubnetA = new CfnSubnet(this, 'PublicSubnetA', {
      cidrBlock: '10.0.1.0/24',
      vpcId: vpc.ref,
      availabilityZone: 'ap-northeast-1a',
      tags: [{ key: 'Name', value: 'study-typescript-public-subnet-a' }]
    });

    const publicSubnetC = new CfnSubnet(this, 'PublicSubnetC', {
      cidrBlock: '10.0.2.0/24',
      vpcId: vpc.ref,
      availabilityZone: 'ap-northeast-1c',
      tags: [{ key: 'Name', value: 'study-typescript-public-subnet-c' }]
    });

    const privateSubnetA = new CfnSubnet(this, 'PrivateSubnetA', {
      cidrBlock: '10.0.11.0/24',
      vpcId: vpc.ref,
      availabilityZone: 'ap-northeast-1a',
      tags: [{ key: 'Name', value: 'study-typescript-private-subnet-a' }]
    });

    const privateSubnetC = new CfnSubnet(this, 'PrivateSubnetC', {
      cidrBlock: '10.0.12.0/24',
      vpcId: vpc.ref,
      availabilityZone: 'ap-northeast-1c',
      tags: [{ key: 'Name', value: 'study-typescript-private-subnet-c' }]
    });
  }
}
