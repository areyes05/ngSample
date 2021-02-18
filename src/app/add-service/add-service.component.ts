import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  serviceForm = this.fb.group({
    name: [''],
    access: ['public'],
    users: [''],
    domains: [''],
    dataType: ['upload'],
    dataContent: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  upload(event): void {
    const input = event.target as HTMLInputElement;
    const reader = new FileReader();
    const result: string[] = [];
    reader.onload = () => {
      result.push(reader.result as string);
      console.log('result', result);
    };

    [...Array(input.files.length)].forEach((_, i: number) => {
      reader.readAsDataURL(input.files[i]);
    });
  }

}
