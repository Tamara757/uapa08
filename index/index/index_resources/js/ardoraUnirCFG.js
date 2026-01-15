//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=12; scoreInc=12; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades , sigue asia delante"; messageTime="2"; messageError="puedes lograrlo"; messageErrorG="puedes lograrlo"; messageAttempts="5"; isShowMessage=false;
var urlOk=""; urlTime="vamos por mas "; urlError="apuesto a ti"; urlAttempts="tu puedes ";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=[];
var con1=["Inteligencia Artificial","Aprendizaje personalizado","Uso irresponsable","Pensamiento crítico","Rol del docente","Ética digital","Privacidad","Honestidad académica"];
var con2=["Tecnología que permite a las máquinas realizar tareas propias de la inteligencia humana.","Enseñanza adaptada al ritmo y necesidades de cada estudiante.","Empleo incorrecto de herramientas tecnológicas que perjudica el aprendizaje.","Capacidad de analizar, reflexionar y evaluar información de manera consciente.","Función del profesor de guiar y orientar el uso adecuado de la tecnología.","Conjunto de valores y normas para el uso responsable de la tecnología.","Cuidado y protección de los datos personales.","Actitud de respeto por el esfuerzo propio y la autoría de los trabajos."];
var con3=["12.5","12.5","12.5","12.5","12.5","12.5","12.5","12.5"];
var sel1=""; join1=[]; join2=[];
