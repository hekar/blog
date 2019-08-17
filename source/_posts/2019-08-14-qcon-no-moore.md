---
layout: post
title: QCon - No Moore Left to Give
author: hkhani
---

> [No Moore Left to Give: Enterprise Computing after Moore's Law](https://www.infoq.com/presentations/moore-law-expiring/)
>
> This post is based on a [keynote presentation](https://www.infoq.com/qconnewyork2019/) by Bryan Cantrill and is [freely available on the InfoQ website.](https://www.infoq.com/presentations/moore-law-expiring/?itm_source=infoq&itm_medium=popular_widget&itm_campaign=popular_content_list&itm_content=)


[Bryan Cantrill](https://www.youtube.com/results?search_query=bryan+cantrill) is one of my favorite presenters, so I was excited to see that he'd be giving a keynote at QCon. For a long time, computer enthuasaists have been talking about the end of Moore's law and what it means for computing. What Cantrill explains is that Moore's law is close to ending, it's not the end of the world, but developers aren't going to get the "free" performance increases we've seen in the past.

Bryan references three "laws" in his talk.

The laws referenced are Dennard Scaling, Moore's Law and Amdahl's Law.

What Bryan argues is that Moore's Law is nearing its end and transistor sizes below 7nm are going to be more expensive and yield less benefits going forward. Programmers have become accustomed to computers becoming faster and cheaper every year, but this may no longer be the case.

I will quickly go over the three laws referenced by Cantrill in his talk.

### Dennard Scaling

From Wikipedia: [wiki/Dennard_scaling](https://en.wikipedia.org/wiki/Dennard_scaling)

> Dennard scaling, also known as MOSFET scaling, is a scaling law based on a 1974 paper co-authored by Robert H. Dennard, after whom it is named. Originally formulated for MOSFETs, it states, roughly, that as transistors get smaller, their power density stays constant, so that the power use stays in proportion with area; both voltage and current scale (downward) with length.

Dennard scaling meant that processors could go faster simply by increasing the frequency. From 100Mhz to 2GHz to 3GHz and so on. Frequency increases broke down somewhere in 2005 - 2007, due to "current leakage" which caused increased chip heat and power consumption. Afterwards, chip manufacturers began adding additional cores, instead of optimizing for increased frequencies.

### Moore's Law

From Wikipedia: [wiki/Moores_law](https://en.wikipedia.org/wiki/Moore%27s_law)

> Moore's law is the observation that the number of transistors in a dense integrated circuit doubles about every two years. The observation is named after Gordon Moore, the co-founder of Fairchild Semiconductor and CEO of Intel, whose 1965 paper described a doubling every year in the number of components per integrated circuit, and projected this rate of growth would continue for at least another decade. In 1975 looking forward to the next decade, he revised the forecast to doubling every two years, a compound annual growth rate (CAGR) of 41.4%.

Unlike Dennard's Scaling, the definition of Moore's Law has less of a consenus. People are still debating exactly what the law covers. Cantrill defines Moore's Law a differently from the summary on Wikipedia. He uses references found in various interviews, articles and books to piece together what he thinks Moore's Law means.

From his [slides](https://www.slideshare.net/bcantrill/no-moore-left-to-give-enterprise-computing-after-moores-law)

> "...for many years, Moore's Law could be inferred to the doublings of density, speed and economics..."

Moore's Law accounts for more than the doubling of density, which could theoritically be achieved at the cost of economics (moving to a more expensive material) or speed.

Cantrill argues that processors had become higher density, while also becoming cheaper for both manufacturers and consumers. This changed around 2015 when processors began becoming more expensive with each additional generation, even though transistor nodes had shrunk in size.


### Amdahl's Law

From Wikipedia: [wiki/Amdahls_law](https://en.wikipedia.org/wiki/Amdahl%27s_law)

> In computer architecture, Amdahl's law (or Amdahl's argument[1]) is a formula which gives the theoretical speedup in latency of the execution of a task at fixed workload that can be expected of a system whose resources are improved. It is named after computer scientist Gene Amdahl, and was presented at the AFIPS Spring Joint Computer Conference in 1967.

The most interesting of the "laws" is "Amdahl's Law" which refers to parallelism and the potiential speed improvements that can be gained by increasing core counts for a particular application.

Amdahl's refers to the speedup that can be expected from parallel computations as limited by the sequentional portion of the application. Applications can be divided into sequential and parallel portions, of which _P_ defines the percentage of the application that executes in parallel.

The Wikipedia image shows the potential speedup with each additional core. The lines denote differing values for _P_ (50%, 75%, 90% and 95%).
![https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AmdahlsLaw.svg/1280px-AmdahlsLaw.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AmdahlsLaw.svg/1280px-AmdahlsLaw.svg.png)

The graph shows that an application with a 50% parallelized portion (such as Google Chrome) will not benefit from anymore than 16 processor cores. An application with 90% parallization will not benefit from more than 512 processor cores.

There's an informative video by [Coreteks](https://www.youtube.com/watch?v=eJBOU23L720&t=442) titled [Hardware trends: How many cores do we need?!](https://www.youtube.com/watch?v=eJBOU23L720&t=442) where he succinctly explains Amdahl's law and how it relates to CPUs, GPUs, ASICs and FPGAs. In the video he states that GPUs, ASICs and FPGAs are not necessarily solutions to CPU performance issues as they all suffer from Amdahl's law. Once a commonly performed tasks have a specialized ASIC created, there is not much that can be done beyond the hardware optimization work we've seen in the past. Transistor size reductions providing ~40% performance improvements every two years will no longer be the case. And tasks which cannot be fully parallelized will not benefit from being executed across many cores. Hence software developers will have to become more accustomed to optimizing their applications again.

### Microservices

One consequence of Moore's Law ending is the proliferation of computing across many devices and computers. CPU computation will become distributed and closer to where it is needed. This is seen in the proliferation of IoT applications we have been seeing.

Part of this has been the push towards microservices. Microservice oriented architectures have the potential to suffer from the same constraints around scaling as Amdahl's law.

Though data is normally partitioned (ideally by more than the tenant), sometimes there's ends up being shared resources where data must be processed sequentially. These portions of the application can be rather difficult to scale.

What percentage of a user's request can be parallized in a distributed system? Are there transactions that need to occur? What about costly shared infrastructure such as queues or event streams?

If a request must go through a shared linear queue in a distributed system, this may limit how effective simply scaling the components around the queue will be.

When architecting distributed systems, careful consideration must be made about shared state if one wants to effectively understand how their system will scale. Simply increasing the number of web servers one has when their file storage is the bottleneck is not effective and can be counter productive.

### Future technologies

There are many technologies in the pipeline of chip manufacturers including 2.5D and 3D packaging which allow for the addition of memory, ASICs, GPUs and other chiplets to be included on processor dies. By including these chiplets on processor dies, the amount of energy and time required to transfer data can be reduced. Making previously high latency tasks feasible in high performance computing.

Other technologies include asymethic processing cores, where CPU cores are designed for different tasks. One core may be designed for high performance single threaded applications such as web browsers, while other cores will be designed for parallizable vector computables used by graphics or video editing applications.

There are still improvements that can be made at the power and IPC level, but they will require changes in software and operating systems.

### Conclusion

The take away from Cantrill's presentation is that computers aren't going to get _much_ faster **_and_** cheaper from here. We will see some improvements in the amount of cores packed into a machine, but this may come at the cost of heat, price and memory latency.

The real outcome is going to be the proliferation of more computers being used in areas we previously did not expect and larger distributed systems being built across slower commodity hardware.
