const formDetails = {
    formValue: [],  //declare an array
    validateForm() {     //declare a function name validate form
    

        var x = document.getElementById("inputName").value;
        if (x == "" || x == null) {           // send alert is text area is empty
            alert("First Name must be filled out");
            return false;
        }
        var x = document.getElementById("inputEmail").value;
        if (x == "" || x == null) {             // send alert is text area is empty
            alert("Email must be filled out");
            return false;
        }
        var x = document.getElementById("inputPassword").value;
        if (x == "" || x == null) {             // send alert is text area is empty
            alert("Password must be filled out");
            return false;

        }
        var x = document.getElementById("inputPassword").value;
        if (x.length < 8) {                 // send alert is text area is empty
            alert("Password must be 8 charactors");
            return false;
        }
        
        /** assigning form values in a variable  */
        
        var fullName = document.getElementById("inputName").value;
        var email = document.getElementById("inputEmail").value;
        var Password = document.getElementById("inputPassword").value;

        /** store localstoarage in array formate  */
        
        this.formValue.push({ fullName, email, Password });
        localStorage.setItem("formValue", JSON.stringify(this.formValue));
        this.aboutUsPage();

    },

    aboutUsPage() {
        window.location = "aboutUs.html";
       
    },
    
}; 

/**
 * 
 About us Page object 
 */

const showAboutUs = {  //creating object

    sendName() {   //creating a function for getting user name data from local storage.

        var userInfo = JSON.parse(localStorage.getItem('formValue'));
        fullNameOut = (userInfo[0].fullName);
        console.log(fullNameOut);
        const leftP_Tag = document.getElementById('userNameTextS');
        leftP_Tag.innerHTML = fullNameOut;
        
    },
    sendEmail() { //creating a function for getting user email data from local storage.
        var userInfo = JSON.parse(localStorage.getItem('formValue'));
        emailOut = (userInfo[0].email);
        const emailInput = document.getElementById('userEmail');
        emailInput.innerHTML = emailOut;
    },

    ptagssecond() {  // passing p tag data at first box
        const secoundValue = document.getElementById("p2Tag");
        secoundValue.innerHTML = ('HTML is the standard markup language for Web pages.With HTML you can create your own Website HTML is easy to learn - You will enjoy it! ');
    },

    ptagsfirst() {  // passing p tag data at mid box
        const firstValue = document.getElementById("firstPtagText");
        firstValue.innerHTML = ('CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.');
    },
    ptagsthrid() {  // passing p tag data at last box
        const thridValue = document.getElementById('p3Tag');
        thridValue.innerHTML = ('JavaScript is the world s most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.');
       
    },
     //create a array for 11 types of color 
    colorArray: ["#4582ec", "#6610f2", "#6f42c1", "#e83e8c", "#d9534f", "#fd7e14", "#f0ad4e", "#02b875", "#20c997", "#17a2b8", "#fff"],
    randomTextPicker() {  //function for pick random color from color array for first p tag box.
    
            const randomIndex = Math.floor(Math.random() * this.colorArray.length);
            var colorData = this.colorArray[randomIndex];
            var newColor = document.getElementById('firstPtagText');
            newColor.style.color = colorData;
          
    
    },
    randomTextPickertwo(){  //function for pick random color from color array for mid p tag box.
        const randomIndextwo = Math.floor(Math.random() * this.colorArray.length);
        var colorDatatwo = this.colorArray[randomIndextwo];
        var newColorSecond = document.getElementById('p2Tag');
        newColorSecond.style.color = colorDatatwo;
      
    },
    randomTextPickerthree(){   //function for pick random color from color array for last p tag box.
        const randomIndextwo = Math.floor(Math.random() * this.colorArray.length);
        var colorDatatwo = this.colorArray[randomIndextwo];
        var newColorSecond = document.getElementById('p3Tag');
        newColorSecond.style.color = colorDatatwo;
        
    },
    ourLocation() {     //function for go to our location page
        window.location = "ourLocation.html";
    },
    bigImagePage() {        //function for go to bigimage page
        window.location = "bigImage.html"
    }


    

};



const setIntervalClass = {   // creating a object for my second page 
    imageAndTextData: [       //creating a array object for image url and text file
        { imageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum?", imgFile: "images/rampuria.jpg" },
        { imageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum?", imgFile: "images/gujner.webp" },
        { imageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum?", imgFile: "images/bhadashah.jpg" },
       
    ],

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.imageAndTextData.length);  //find random index
        const imageData = this.imageAndTextData[randomIndex];           // assgin array object to a variable call imageData
        var imageTextData = (imageData.imageText);          // assgin text data
        var imageUrlData = (imageData.imgFile);     //assgin array url source
        document.getElementById('showTextAboutImage').innerHTML = imageTextData;    //show text data at html file 
        document.getElementById('showBigImage').src = imageUrlData;     // assgin image source
    
    },
    thaksPage() {
        window.location = "thanks.html";    // function for go to thanks html page
    }
};


const thanksObject = {          //create a new object for thanks page
colorTextArray : ["red","green","yellow","grey","pink", "purple"],          //create a new array stored color value 

randomColorPicker() {       //create a function for pick random color 
    
        const randomIndex = Math.floor(Math.random() * this.colorTextArray.length);
        var colorData = this.colorTextArray[randomIndex];
        var newColor = document.getElementById('thanksHeading');
        newColor.style.color = colorData;
    },
   

}



