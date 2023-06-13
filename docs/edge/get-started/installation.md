---
id: installation
title: Installation
description: "How to install Polygon Edge."
keywords:
  - docs
  - polygon
  - edge
  - install
  - installation
---

Please refer to the installation method more applicable to you.

Our recommendation is to use the pre-built releases and verify the provided checksums.

## Pre-built releases

Please refer to the [GitHub Releases](https://github.com/0xPolygon/polygon-edge/releases) page for a list of releases.

Polygon Edge comes with cross-compiled AMD64/ARM64 binaries for Darwin and Linux.

--- 

## Docker image

Official Docker images are hosted under the [hub.docker.com registry](https://hub.docker.com/r/0xpolygon/polygon-edge).

`docker pull 0xpolygon/polygon-edge:latest`

---

## Building from source

Prior to using `go install` make sure that you have Go `>=1.18` installed and properly configured.

The stable branch is the branch of the latest release.

```shell
git clone https://github.com/0xPolygon/polygon-edge.git
cd polygon-edge/
go build -o polygon-edge main.go
sudo mv polygon-edge /usr/local/bin
```

---

## Using `go install`

Prior to using `go install` make sure that you have Go `>=1.17` installed and properly configured.

`go install github.com/0xPolygon/polygon-edge@release/<latest release>`

The binary will be available in your `GOBIN` environment variable, and will include the changes from the latest release. You can checkout out [GitHub Releases](https://github.com/0xPolygon/polygon-edge/releases) to find out which one is the latest.
