function handler(event) {
    var request = event.request;
    var headers = request.headers;
    var querystring = request.querystring;
    var cookies = request.cookies;

    // First condition: If header['CustomerType'] === 'VIP'
    if (
        headers['customertype'] && headers['customertype'].value === 'vip'
    ) {
        var queryA = querystring['A'] ? querystring['A'].value : '';
        var cookieB = cookies['B'] ? cookies['B'].value : '';

        // Set custom_header_1 to queryA + cookieB
        request.headers['custom_header_1'] = {
            value: queryA + cookieB
        };

        return request;
    }
    
    // second condition: If header['musttoorigin'] === True
    if (headers['musttoorigin']) {
        
        request.headers['custom_header_2'] = {
            value: 'MustToOrigin'
        };

        return request;
    }

    return request;
}
