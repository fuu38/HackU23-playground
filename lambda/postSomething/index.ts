import { APIGatewayProxyEvent,APIGatewayProxyResult } from 'aws-lambda';
exports.handler = async (event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: 'Recieved something!',
        event: event.body,
        }),
    };
};
