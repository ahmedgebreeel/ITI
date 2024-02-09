import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private client : HttpClient) { }
  private URL = "http://localhost:3000/students";

  getAllStudents(){
   return this.client.get(this.URL);
  }

  getStudentById(id:number){
   return this.client.get(this.URL + "/" + id);
  }
  addStudent(student:any){
    return this.client.post(this.URL,student);
  }
  updateStudent(id:number, student:any){
    return this.client.put(this.URL + "/" + id , student);
  }
  deleteStudent(id:number){
    return this.client.delete(this.URL + "/" + id);
  }

}
 