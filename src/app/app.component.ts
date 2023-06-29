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
  fileUpload($event: any){
    const files = $event.target.files as FileList;
    this.file = files.item(0)
    console.log('Event', $event, this.file)
  }
openWord() {
  console.log('Form Element',this.myForm.value)
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
