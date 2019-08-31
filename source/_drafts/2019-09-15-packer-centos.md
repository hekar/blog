---
layout: post
date: 2019-09-15
title: Packer CentOS
author: hkhani
---

[Packer][packer] is an open source [Go][golang] based tool created by [Hashicorp][hashicorp] for building consistent machine images for numerous platforms. These platforms include [AWS EC2][aws-ec2], [Azure][azure], [Google Cloud][google-cloud], [qemu], [VirtualBox][virtualbox] and even [Docker][docker]. Packer is available on many platforms and is distributed as a binary, distribution package or can be built from source. 

Packer produces outputs based on [Builders][builders]. [Builders][builders] produce images for various machine formats. These images are then loaded into their respective to service to run [Provisioners][provisioners] against which customize the image for further usage. The final phase executed by Packer is [Post-Processors][post-processors] which can be used for re-packaging, publishing to repositories, Vagrant configurations, etc.

> Builder -> Provisioner -> Post-Processor


### Why Packer?

Packer can be useful when designing machine images for applications being continuously deployed.

The benefits from packer versus manually creating are numerous, but the main 

##### Continuous Delivery

Continuous Delivery pipelines need to be as automated as possible, so that developers can be make effective use of them and develop software without the Continuous Deliver environment consuming the majority of their time.

One part of Continuous Delivery that is often overlooked is the verification of the artifacts that are to be deployed to stage, development or production environments. Packer helps with verification of machine images through the post-processor stage. Images can be validated for used in different environments. Validation can be scripted and is up to the developer responsible for the Continuous Delivery environment.

##### Environment Parity

- Deploy images to multiple environments
    - AWS, Kubernetes, Azure, etc
    - Support On-Prem and Cloud
- Staging, dev and production

##### Appliances

- User Acceptance Testing (UAT)
- Trial environments
- Test sites

### Provisioners

The input for [Packer][packer] is a combination of configuration and a source image.

### Builders

Output is based on [Builders][builders]

### Support

### CentOS

packer.json -> build -> verify.json

    Source Image        Baked       Verified
        +           ->  Image   ->  Image
    Configuration

Configuration:
```
```

Build times:

Run and output:

### Conclusion


[packer]: https://packer.io
[hashicorp]: https://www.hashicorp.com
[builders]: https://packer.io/docs/builders/index.html
[provisioners]: https://packer.io/docs/provisioners/index.html
[post-processors]: https://packer.io/docs/post-processors/index.html
[golang]: https://golang.org/
