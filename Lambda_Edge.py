import json

def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']
    response = event['Records'][0]['cf']['response']
    headers = request['headers']

    # Check if 'custom_header_1' is present in the request headers
    if 'custom_header_1' in headers:
        response['headers']['cache-control'] = [{
            'key': 'Cache-Control',
            'value': 'max-age=3600'
        }]
        return response

    # Check if 'custom_header_2' is present in the request headers
    if 'custom_header_2' in headers:
        response['headers']['cache-control'] = [{
            'key': 'Cache-Control',
            'value': 'no-cache'
        }]
        return response

    # No matching headers, return the original response
    return response

