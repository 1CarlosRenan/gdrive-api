import { logger } from "./logger.js"

export class Routes {
  io

  setSocketInstance(io) {
    logger.info('apply socket')
    this.io = io
  }

  async defaultRoute(request, response) {
    response.end('hello from default')
  }

  async options(request, response) {
    response.writeHead(204)
    response.end()
  }

  async post(request, response) {
    logger.info('post')
    response.end()
  }

  async get(request, response) {
    logger.info('get')
    response.end()
  }

  handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const chosen = this[request.method.toLowerCase()] || this.defaultRoute

    return chosen.apply(this, [request, response])
  }
}