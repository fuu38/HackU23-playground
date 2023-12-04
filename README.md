## Endpoint
`https://1w58po44ae.execute-api.ap-northeast-1.amazonaws.com/prod/`

## functions
### available methods
/:GET  you can get something.
/:POST you can post something,then server returns it.

### How to try
just execute like this
```
curl -X POST -H "Content-Type: application/json" -d \
'{"key1":"value1", "key2":"value2"}' \
https://1w58po44ae.execute-api.ap-northeast-1.amazonaws.com/prod/
```
## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
