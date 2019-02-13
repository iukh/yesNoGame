import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Section } from '../models/section';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SectionService {

  constructor(private http: HttpClient) { }
  getSections() {
    return this.http.get<Array<Section>>(`http://localhost:3000/api/sectionManagement/activeSections`);
  }
}
