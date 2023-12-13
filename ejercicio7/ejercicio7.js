'use strict'

let gDrive = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let post1 = gDrive.indexOf ("d/") +2;
let post2 = gDrive.indexOf ("/", post1);
let id = gDrive.substring (post1, post2);

alert (id);