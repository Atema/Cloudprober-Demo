# Demo Script

## Introduction

<!--
What is Cloudprober?

What is Prometheus?

What will we show?

What's the infrastructure we're using
-->

## The actual demo

*Show the existing project and components in Google Cloud.*

For this project, we're using the Google Cloud Kubernetes Engine, where we've already set-up a cluster where we'll install Cloudprober and Prometheus. In this cluster, we've already setup an example API for testing <!-- Explain the API -->. 

*Show the terminal.*

We will perform the steps using `kubectl`. We have already installed and authenticated ourselves with `gcloud` (see link in description). We can easily configure our `kubectl` for use with GKE by using the command.

*Execute `gcloud container clusters get-credentials demo-cluster`*.

Now, we can install the applications. First, Cloudprober.

*Show and explain the Cloudprober configuration file*

*Using configmap to save the config file in GKE*.

*Show and explain the Cloudprober deployment file*

*Apply the deployment file*

Then, we can do the same thing for Prometheus.

*Show/explain config*

*Apply config*

*Show deployment*

*Apply deployment*

Both are installed, we can see the effects in the Google Cloud Console.

*Show GC console*
