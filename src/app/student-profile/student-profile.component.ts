import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-student-profile',
  standalone: false,
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
studentName = 'John Doe';
  studentAge = 20;
  profileImageUrl = 'https://www.bing.com/images/search?view=detailV2&ccid=TqRgd0FA&id=E2BF16920B399D9FCD6BA1DB0ED83424B2E9011C&thid=OIP.TqRgd0FAlCJEdKQrIgyqtAHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4ea46077414094224474a42b220caab4%3frik%3dHAHpsiQ02A7boQ%26riu%3dhttp%253a%252f%252fupload.wikimedia.org%252fwikipedia%252fcommons%252fa%252fae%252fAn_Adidas_shoe.jpg%26ehk%3dIYgSREE1XHWSAY1kpTm%252fteTImNCzvfGrbX2cDlF1YbY%253d%26risl%3d1%26pid%3dImgRaw%26r%3d0&exph=2592&expw=3888&q=shoe&simid=608052643033387868&FORM=IRPRST&ck=89CA2325DEF2EC5827B91F7C799F8F49&selectedIndex=1&itb=0';
  isButtonDisabled = false;
  colspanValue = 2;
   isPrimary = true;
//   isError = false
//   toggleClass() {
//     this.isError = !this.isError
//   }
// isActive = false
// isHighlight = true
// isDark = false

isError = false;

boxWidth = 200;  // rendered as width: 200px
  boxHeight = 50;  // rendered as height: 50%

 

  dynamicStyles = {
    'background-color': this.isPrimary ? 'blue' : 'gray',
    'color': 'white',
    'padding.px': 10
  };
  
  isActive = true;
  isLargeText = true;
  isDisabled = true;

  sayhello() {
    console.log('hello angular');
  }

  // userInput = "";

  // onInputChange(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   this.userInput = inputElement.value;

  // }
  
  userInput = "";

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.userInput = inputElement.value;
  }

  count = 0;

  onButtonClick() {
    this.count++;
  }

  name = '';

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
  
}

