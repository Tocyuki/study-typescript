import * as cdk from '@aws-cdk/core';
import { CfnSubnet, CfnVPC } from '@aws-cdk/aws-ec2';

export class Subnet {
    public public1a: CfnSubnet;
    public public1c: CfnSubnet;
    public private1a: CfnSubnet;
    public private1c: CfnSubnet;

    private readonly vpc: CfnVPC;

    constructor(vpc: CfnVPC) {
        this.vpc = vpc;
    };

    public createResources(scope: cdk.Construct) {
        this.public1a = new CfnSubnet(scope, 'PublicSubnetA', {
            cidrBlock: '10.0.1.0/24',
            vpcId: this.vpc.ref,
            availabilityZone: 'ap-northeast-1a',
            tags: [{ key: 'Name', value: 'study-typescript-public-subnet-a' }]
        });

        this.public1c = new CfnSubnet(scope, 'PublicSubnetC', {
            cidrBlock: '10.0.2.0/24',
            vpcId: this.vpc.ref,
            availabilityZone: 'ap-northeast-1c',
            tags: [{ key: 'Name', value: 'study-typescript-public-subnet-c' }]
        });

        this.private1a = new CfnSubnet(scope, 'PrivateSubnetA', {
            cidrBlock: '10.0.11.0/24',
            vpcId: this.vpc.ref,
            availabilityZone: 'ap-northeast-1a',
            tags: [{ key: 'Name', value: 'study-typescript-private-subnet-a' }]
        });

        this.private1c = new CfnSubnet(scope, 'PrivateSubnetC', {
            cidrBlock: '10.0.12.0/24',
            vpcId: this.vpc.ref,
            availabilityZone: 'ap-northeast-1c',
            tags: [{ key: 'Name', value: 'study-typescript-private-subnet-c' }]
        });
    }
}