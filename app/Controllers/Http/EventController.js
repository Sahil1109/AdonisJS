'use strict'
const Event = use('App/Models/Event')
class EventController {
    
    async store ({ request, response }) {
        const {
          title,
          start_date,
          end_date,
          location,
          price
        } = request.all()
    
        const event = await Event.create({
          title,
          start_date,
          end_date,
          location,
          price
        })
    
        return response.status(201).json({ event })
    }

    async index({response}){
        const events = await Event.all();

        return response.status(200).json({events})
    }

    async delete({params, response}){

        const event = await Event.find(params.id);
        await event.delete();

        return response.status(200).json({
            message:'Event deleted succesfully'
        })
    }
}

module.exports = EventController
