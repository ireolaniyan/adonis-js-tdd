'use strict'

const Home = use('App/Models/Home')

class HomeController {
  async create({ request, response }) {
    const homeData = request.all()

    const home = await Home.create(homeData)

    return home.toJSON()
  }
}

module.exports = HomeController
