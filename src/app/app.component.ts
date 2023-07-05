import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from 'docx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wordPoC';
  file: File | null = null;
  myForm = new FormGroup({
    wordDoc : new FormControl('')
    
  })
  userArray: any = [];
  constructor(private http: HttpClient) {}
  fileUpload($event: any){
    const files = $event.target.files as FileList;
    this.file = files.item(0)
    console.log('Event', $event, this.file)
  }
openWord() {
  console.log('Form Element',this.myForm.value.wordDoc)
  if(this.myForm.value.wordDoc) {
    this.http.get('assets/data/Property-Cat-Template.csv', {responseType: 'text'})
      .subscribe(
          data => {
              let csvToRowArray = data.split("\n");
              for (let index = 1; index < csvToRowArray.length - 1; index++) {
                let row = csvToRowArray[index].split(",");
                this.userArray.push(row);
              }
              console.log(this.userArray);
          },
          error => {
              console.log(error);
          }
      );
  }
}

  docxDownload() {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: 'Hello',
              heading: HeadingLevel.HEADING_1
            })
          ]
        }
      ]
    });

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
}
