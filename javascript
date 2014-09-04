//Change-cam//
//==========//

//a simple way to change the camera form  first person to thrid and back agian nno licence please just include me in the credits//
var cameraMain : Camera; 
var camera3rd : Camera; 
 
function Start () { 
   cameraMain.enabled = true; 
   camera3rd.enabled = false; 
} 
 
function Update () { 
   if (Input.GetKeyDown ("z")){ 
     if ( cameraMain.enabled == true){ 
      camera3rd.enabled = true;
      cameraMain.enabled = false; 
   } 
   else if (camera3rd.enabled == true){
      cameraMain.enabled = true; 
      camera3rd.enabled = false;
 
 
        }
    }
}
