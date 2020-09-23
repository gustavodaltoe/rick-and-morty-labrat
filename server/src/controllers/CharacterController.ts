import { Response, Request } from 'express';
import CharacterService from '../services/CharacterService';

export default class CharacterController {
  async humansFromEarthC137(request: Request, response: Response) {
    const characterService = new CharacterService();
    try {
      const humans = await characterService.getCharacters(1, 'human');
      return response.json({
        info: {
          count: humans.length,
          species: 'human',
        },
        results: humans,
      });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}
