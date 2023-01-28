module.exports = function (server) {
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
    
            var data = {
                message: 'API calculator @K-rolls',
                add: 'localhost:3000/calculator/sum/{num1}+{num2}',
                subtract:'/calculator/sub/{num1}-{num2}',
                multiply:'/calculator/muliply/{num1}*{num2}',
                divide:'/calculator/divide/{num1}/{num2}'                
            };
    
            return data;
        }
    });

    // Sum route
    server.route({
        method: 'GET',

        path: '/calculator/sum/{num1}+{num2}',
        handler: function (request, h){
            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 + num2
            };

            return data;
        }
    });

    // subtraction route
    server.route({
        method: 'GET',

        path: '/calculator/sub/{num1}-{num2}',
        handler: function (request, h){
            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 - num2
            };

            return data;
        }
    });

    // multiplication route
    server.route({
        method: 'GET',

        path: '/calculator/muliply/{num1}*{num2}',
        handler: function (request, h){
            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 * num2
            };

            return data;
        }
    });

    // division route
    server.route({
        method: 'GET',

        path: '/calculator/divide/{num1}/{num2}',
        handler: function (request, h){
            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 / num2
            };

            return data;
        }
    });
}