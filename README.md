# Config Get Fresh

## The problem

The `config` package doesn't reload values from disk when you call config.get.  
This is a problem when you are working with Helm/K8s that updates a Configmap on a `helm upgrade`.  

## The solution

This is very small package but very usefull because it clears the config module cache before requiring it.  
So, on each call it will read from the disk again.  
Solving the problem of helm upgrade.

## Usage

```js
const configGetFresh = require(`config-get-fresh`);
const timeout = getGetFresh(`timeout`);
```
