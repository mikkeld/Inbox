import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BaseService {

  private authId: string;

  constructor(private authService: AuthService) {
    this.authService.getUserInformation()
      .subscribe(user => {
        this.authId = user.authId;
      })
  }

  getAuthId(): string {
    return this.authId;
  }
}
