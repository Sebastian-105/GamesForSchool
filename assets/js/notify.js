Notification.requestPermission();
var consent = localStorage.getItem("notify");
if (!consent) {
  localStorage.setItem("notify", true)
}

async function send() {
  var consent = localStorage.getItem("notify");
  if (consent == "true") {
    console.log("consent true")

    var text = "This site is new, so I would apprecite if you shared with your friends!";
    var notif = new Notification("Update", { body: text, icon: img });
  } else {
    console("consent false")
  }
}

if (Notification.permission == "false") {
  localStorage.setItem("notify", false);
} else {
  send();
}