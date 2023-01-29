---
layout: post
date: "2023-01-29"
title: Arch on the server
---

[Archlinux] on the server is rarely considered by Administrators or Engineers working on Production applications, but it is an interesting operating system to consider. The positives of such a deployment, while numerous and mentionable cannot be given without uncovering some of the potential pitfalls. Consideration operating systems for cloud or enterprise grade environments requires the evaluation of a multitude of factors that may not be applicable to all system design requirements. An organization may decide that weighting security more than performance is worth the added expense. For others debugging symbols, commercial support or stable application binary interfaces maybe of greater importance. Regardless it is worthwhile to evaluate whether Arch has any advantages on the server and if anything offered can be applicable to certain environments.

---

What is Archlinux

How to install Archlinux

What is Archinstall

Why use Archlinux on the desktop

Why use Archlinux on the server

What is Packer

Why use Packer with Archlinux

How to deploy the server

Deploying the server with virt-manager or virt-install is straightforward.

Conclusion
- Unfortunately archinstall is riddled with bugs and its API requires calling obscure interfaces in the correct ordering for their function. This is likely due to a lack of tests and API design in the project. The user experience is 


<link to github repo>


[Archlinux]: https://github.com/hekar/packer-archlinux

