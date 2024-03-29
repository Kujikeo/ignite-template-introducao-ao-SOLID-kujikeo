import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.params.user_id;
    try {
      return response.status(200).json(this.showUserProfileUseCase.execute({ user_id: id}));
    } catch (error) {
      return response.status(404).json({error: error.message});
    }
  
  }
}

export { ShowUserProfileController };
