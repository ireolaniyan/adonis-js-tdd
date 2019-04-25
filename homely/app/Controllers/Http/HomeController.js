'use strict'

const Home = use('App/Models/Home')

class HomeController {
  async create({ request, response }) {
    try {
      const homeData = request.all()
  
      const home = await Home.create(homeData)
  
      return home.toJSON()
      // response.status(200).send({
      //   message: 'New home added',
      //   result: home
      // })
    } catch (error) {
      console.log(error);
      
    }
  }

  async editHome({ params: { id }, request, response }) {
    try {
      const home = await Home.find(id)
  
      home.title = request.input('title') 
      home.description = request.input('description')
      home.photo = request.input('photo')
      home.price = request.input('price')
      home.locale = request.input('locale')
      home.type = request.input('type')
      home.rooms = request.input('rooms')
      home.bathrooms = request.input('bathrooms')
      home.kitchens = request.input('kitchens')
      home.floors = request.input('floors')
      home.sq_footage = request.input('sq_footage')
  
      await home.save()
  
      return home.toJSON()
    } catch (error) {
      const message = 'Home not found'
      return message.toJSON()
    }
  
  }

  async allHomes({ request, response }) {
    try {  
      const home = await Home.all()
  
      return home.toJSON()
    } catch (error) {
      console.log(error);
      
    }
  }

}

module.exports = HomeController
