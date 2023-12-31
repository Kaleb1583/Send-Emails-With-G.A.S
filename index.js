function doGet() {
  //---
  var subject = ``; // the subject / header / title
  var body = ``; // the body
  const Users = '';  // emails to send to
  // it can User(S): Users = "person@gmail.com,person@outlook.com,person@yahoo.com";
  const Subject = subject;
  const Body = body;
  var Send =   MailApp.sendEmail(Users, Subject, Body)
  var times = 1;
  //---

  for (let i = 1; i < 1; i++) {
    MailApp.sendEmail(Users, Subject, Body)
    Logger.log("sent email")
  }

  Logger.log("done.")
}
