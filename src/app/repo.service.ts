import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private token = environment.apikey;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  private repository!:string;

  constructor(private http : HttpClient) { }
   
  getRepoData(){ 
    return this.http.get(`https://api.github.com/search/repositories?q=${this.repository}&client_secret=${this.clientSecret}`)
   }

  updateFields(repository: string){
    this.repository = this.repository;
  }
}
