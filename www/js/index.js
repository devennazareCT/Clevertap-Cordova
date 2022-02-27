
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("eventpush").addEventListener("click", eventPush);
document.getElementById("productpush").addEventListener("click", productView);
document.getElementById("showinbox").addEventListener("click", showInbox);
document.getElementById("shownative").addEventListener("click", nativeDisplay);

function onDeviceReady() {
CleverTap.setDebugLevel(3);
 // Cordova is now initialized. Have fun!
    document.getElementById('deviceready').classList.add('ready');
   // document.getElementById("eventpush").addEventListener("click", eventPush, false);
CleverTap.onUserLogin ({
            'Name': 'Deven',
            "Phone": "877963312",
            'Email': 'deven@cordova.com',
            'Identity':'30330','Gender':'M'});
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

     CleverTap.createNotificationChannel("0101", "DevenCordova", "CordovaTest", 5, true);
         CleverTap.recordEventWithName("DevenCordova");
         document.addEventListener('onPushNotification', this.onPushNotification, false);
     CleverTap.registerPush();
             CleverTap.initializeInbox();



}
function eventPush(){
         CleverTap.recordEventWithName("DevCordovaPressed");

alert("Event Pushed")
}
function productView(){
         CleverTap.recordEventWithNameAndProps("ProductViewCRD", {"Name":"iPhone12"});
            alert("Product View")
    CleverTap.getAllInboxMessages(function(val) {console.log("Inbox messages are "+val);});

}
function showInbox(){
           // CleverTap.showInbox({"navBarTitle":"My App Inbox","tabs": ["tag1", "tag2"],"navBarColor":"#eab215"});
             CleverTap.showInbox({"navBarTitle":"App Inbox","navBarColor":"#eab215"});

}

function nativeDisplay(){
         CleverTap.recordEventWithName("DevCordovaNative");


    CleverTap.getAllDisplayUnits(function(val) {
document.getElementById("nativemsg").innerHTML =JSON.stringify(val[0].content[0].message.text).replace(/['"]+/g, '');

document.getElementById("nativetitle").innerHTML =JSON.stringify(val[0].content[0].title.text).replace(/['"]+/g, '');

    console.log("Native haha Display units are "+JSON.stringify(val[0].content[0].message.text));



    });
    //val.content[0].message.text


}

