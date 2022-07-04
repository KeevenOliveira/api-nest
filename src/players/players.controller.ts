import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayer } from './dtos/CreatePlayerDTO';

@Controller('players')
export class PlayersController {
    
    @Post()
    async createPlayer(@Body() {email, name, phone}: CreatePlayer){
        return JSON.stringify({
            name: name,
            email: email,
            phone: phone
        })
    }

    async updatePlayer(){

    }
}
