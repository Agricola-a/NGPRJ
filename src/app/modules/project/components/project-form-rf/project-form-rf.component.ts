import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray, AbstractControl, Form } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-form-rf',
  templateUrl: './project-form-rf.component.html',
  styleUrls: ['./project-form-rf.component.css']
})
export class ProjectFormRfComponent implements OnInit {

  @Input() project!: Project;
  @Output() submitted = new EventEmitter<Project>();

  projectForm = this.fb.group({
    end: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),
    tasks: this.fb.array([])
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectForm.patchValue(this.project);
    /*this.projectForm.statusChanges.subscribe((f) => console.log(f));
    this.projectForm.valueChanges.subscribe((f) => console.log(f));*/
  }

  public get endDate(): AbstractControl | null {
    return this.projectForm.get('end');
  }

  public get description(): AbstractControl | null {
    return this.projectForm.get('description');
  }

  public get tasks(): FormArray {
    return this.projectForm.get('tasks') as FormArray;
  }

  /*public getTask(t: any): AbstractControl | null {
    return t as AbstractControl;
  }*/

  public addTask(): void {
    const newControl = this.fb.group({
      name: this.fb.control('', [Validators.required])
    })
    this.tasks.push(newControl);
  }

  erase(index: number): void {
    this.tasks.removeAt(index);
  }
  submit(){
    this.submitted.emit(this.projectForm.value);
  }
}
