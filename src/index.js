import Hapi from 'hapi'
import { OCRService } from './services/OCRService'
// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
    host: 'localhost',
    port: 8000,
    routes: { cors: true }
})

// Add a route
server.route({
    method: 'POST',
    path: '/product',
    config: {
        handler: function (request, reply) {
            const file = request.payload.file
            console.log(file)
            //OCRService.sendToOCR(file)
            reply('Received your data')

        },
        payload: {
            maxBytes: 209715200,
            output: 'file',
            parse: true
        }
    }
})

server.route({
    method: 'POST',
    path: '/scan',
    config: {
        handler: function (request, reply) {
            const payload = request.payload
            console.log(payload)
            reply('Received your data')
        },
        payload: {
            maxBytes: 209715200,
            output: 'stream',
            parse: true
        }
    }
})

// Server the server
server.start()