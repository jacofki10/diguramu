//25 QUESTIONS ARRAY//
var question = [
   CP = [
      { questionNumber: "1", type: "CP", question: "1question",  answer1: "周囲から「せっかち」だと言われることが多い", answer2:"周囲から「のんびり屋」だと言われることが多い"},
      { questionNumber: "2", type: "CP", question: "2question",  answer1: "見栄っ張りだと思う", answer2:"見栄っ張りだとは思わない"},
      { questionNumber: "3", type: "CP", question: "3question",  answer1: "怒られたり、ムカつくことがあると根に持ってしまう", answer2:"怒られたり、ムカつくことがあっても根に持たない"},
      { questionNumber: "4", type: "CP", question: "4question",  answer1: "嫌なことがあると弱音・愚痴をつい言ってしまう", answer2:"嫌なことがあっても弱音・愚痴は言わないように努めている"},
      { questionNumber: "5", type: "CP", question: "5question",  answer1: "相手の遅刻を許せない", answer2:"相手の遅刻を許せる"}
   ],
    NP = [
      { questionNumber: "6", type: "NP", question: "6question", answer1: "頼み事をされると基本、断れない", answer2:"頼み事をされても、メリットを感じなければ断る"},
      { questionNumber: "7", type: "NP", question: "7question", answer1: "すぐ泣いてしまうほうだ", answer2:"なかなか泣かないほうだ"},
      { questionNumber: "8", type: "NP", question: "8question", answer1: "自分は寂しがりやだ", answer2:"自分は寂しがりやではない"},
      { questionNumber: "9", type: "NP", question: "9question", answer1: "人の幸せな話を聞くほうが好き", answer2:"人の不幸な話を聞くほうが好き"},
      { questionNumber: "10", type: "NP", question: "10question", answer1: "自分で料理をすることが好き", answer2:"自分で料理をすることが嫌い"}
   ],
   A = [
      { questionNumber: "11", type: "A", question: "11question", answer1: "「約束の時間」とはその時間より5分前のことだ", answer2:"「約束の時間」とはその時間の通りである"},
      { questionNumber: "12", type: "A", question: "12question", answer1: "予期せぬ質問を受けた時、うろたえずに返答することができる", answer2:"予期せぬ質問を受けた時、うろたえて言葉につまることが多い"},
      { questionNumber: "13", type: "A", question: "13question", answer1: "数字を扱うことが得意だ", answer2:"数字を扱うことが苦手だ"},
      { questionNumber: "14", type: "A", question: "14question", answer1: "交渉ごとが得意だ", answer2:"交渉ごとが苦手だ"},
      { questionNumber: "15", type: "A", question: "15question", answer1: "アイデアを出すのが得意だ", answer2:"アイデアを出すのが苦手だ"}
   ],
   FC = [
      { questionNumber: "16", type: "FC", question: "16question", answer1: "勝負事・競争に熱くなりやすい", answer2:"勝負事・競争に熱くならない"},
      { questionNumber: "17", type: "FC", question: "17question", answer1: "突然の食事の誘いにも応じるなど、フットワークは軽いほうだ", answer2:"突然の食事の誘いは応じることができず、フットワークは軽くないほうだ"},
      { questionNumber: "18", type: "FC", question: "18question", answer1: "新しいことにチャレンジするのが好きだ（革新的）", answer2:"新しいことにチャレンジするのは苦手だ（保守的）"},
      { questionNumber: "19", type: "FC", question: "19question", answer1: "自分は運がいいほうだ", answer2:"自分は運が悪いほうだ"},
      { questionNumber: "20", type: "FC", question: "20question", answer1: "流行・トレンドは好き・嫌い関係なく、常に触れる努力をしている", answer2:"流行・トレンドに流されず、自分の良いと思ったものだけに触れることが多い"}
   ],
   AC = [
      { questionNumber: "21", type: "AC", question: "21question", answer1: "ランチの時、なかなか注文を決められない", answer2:"ランチの時、すぐに注文を決められる"},
      { questionNumber: "22", type: "AC", question: "22question", answer1: "やりたくないことは後回しにするほうだ", answer2:"やりたくないことは先に済ませてしまうほうだ"},
      { questionNumber: "23", type: "AC", question: "23question", answer1: "ストレスは溜め込むほうである", answer2:"ストレスはすぐに発散するほうである"},
      { questionNumber: "24", type: "AC", question: "24question", answer1: "飲み会のお金は全員均等に払うべきだ", answer2:"飲み会のお金は払える人がより多く払うべきだ"},
      { questionNumber: "25", type: "AC", question: "25question", answer1: "会議・打ち合わせでは議事録などサポート業務にまわるほうだ", answer2:"会議・打ち合わせでは積極的に発言するほうだ"}
   ]
];

//GET THE 10 QUESTIONS//
function rand(sounceArray, destinationArray){
    var ran = sounceArray[Math.floor(Math.random() * sounceArray.length)];  
    if (destinationArray.indexOf(ran) == -1)
    destinationArray.push(ran);
    else
         rand(sounceArray, destinationArray );
}
function randomSelect2 (sounceArray){
var destinationArray = [];
for (var i = 0; i < 2; i++){
   rand(sounceArray, destinationArray);
   }
   return destinationArray;
}
var CPselected = randomSelect2(CP);
var NPselected = randomSelect2(NP);
var Aselected = randomSelect2(A);
var FCselected = randomSelect2(FC);
var ACselected = randomSelect2(AC);
var finalQuestions = CPselected.concat(NPselected, Aselected, FCselected, ACselected);

var html  = '';
var number = 1;
var classNumber = 1;
for (var i = 0; i < finalQuestions.length; i++) {
    html+="<div id='question＿"+classNumber+++"' class='diacrisis_data'>";
    html+="<div class='no'>"+number+++"</div>";
    html+="<div class='total_number'>"+finalQuestions[i].questionNumber+"</div>";
    html+="<div class='type'>"+finalQuestions[i].type+"</div>";
    html+="<div class='question'>"+finalQuestions[i].question+"</div>";
    html+="<div class='answer1'>"+finalQuestions[i].answer1+"</div>";
    html+="<div class='answer2'>"+finalQuestions[i].answer2+"</div>";
    html+="</div>";
}
document.getElementById("data_area").innerHTML = html;
//GET THE 10 QUESTIONS//


//SHOW THE QUESTIONS IN THE QUIZ ORDERLY//
const MAX_QUESTION_NO = 10;
const MAX_TYPE_SCORE = 2;
var $qNo = $('#q_no');
var $TotalNo = $('#total_no');
var $question = $('#question');
var $qAnswer1 = $('#q_answer1');
var $qAnswer2 = $('#q_answer2');
var $qProgressBar = $('#q_progress_bar');
var $qProgressNo = $('#q_progress_no');
var scoreData = [];
var $form = $('form[name=ResultForm]');
var List = [];
var user = [];

function init() {
   $('.diacrisis_data').each(function(i, elem) {
      var $this = $(this);
      var No = $('.no', $this).text();
      var Type = $('.type', $this).text();
      var TotalNumber = $('.total_number', $this).text();
      var Question = $('.question', $this).text();
      var Answer1 = $('.answer1', $this).text();
      var Answer2 = $('.answer2', $this).text();
      List[No] = {
         'Type': Type,
         'TotalNumber': TotalNumber,
         'Question': Question,
         'Answer1': Answer1,
         'Answer2': Answer2,
      };
      scoreData[Type] = 0;
   });
   setupQuestion(1);
}

function nextQuestion(currentNo) {
   if (MAX_QUESTION_NO <= currentNo) {
      var scoreLevel = "";
      for (type in scoreData) {
         scoreLevel += (scoreData[type] + 1);
      }
      sentToServer();
      $form.append('<input type="hidden" name="score_level" value="' + scoreLevel + '">');
      $form.submit();
      return false;
   }
   setupQuestion(currentNo + 1);
}

function setupQuestion(no) {
   $qNo.text(no);
   $TotalNo.text(List[no].TotalNumber);
   $question.text(List[no].Question);
   $('a', $qAnswer1).text(List[no].Answer1);
   $qAnswer1.data('type', List[no].Type);
   $qAnswer1.data('no', no);
   $('a', $qAnswer2).text(List[no].Answer2);
   $qAnswer2.data('type', List[no].Type);
   $qAnswer2.data('no', no);
   $qProgressNo.text(no);
   var progressBarPrefix = 'per';
   $qProgressBar.removeClass(progressBarPrefix + (no - 1) * 10).addClass(progressBarPrefix + no * 10);
}

function SaveinArray(answer){
   var q_no = $("#q_no").text();
   var main_no = $("#total_no").text();
   var answer = (answer) ;
   user.push(q_no, main_no, answer);
}

function sentToServer(){
   var q_no1 = user[0];
   var q_total_no1 = user[1];
   var answer_1 = user[2];
   var q_no2 = user[3];
   var q_total_no2 = user[4];
   var answer_2 = user[5];
   var q_no3 = user[6];
   var q_total_no3 = user[7];
   var answer_3 = user[8];
   var q_no4 = user[9];
   var q_total_no4 = user[10];
   var answer_4 = user[11];
   var q_no5 = user[12];
   var q_total_no5 = user[13];
   var answer_5 = user[14];
   var q_no6 = user[15];
   var q_total_no6 = user[16];
   var answer_6 = user[17];
   var q_no7 = user[18];
   var q_total_no7 = user[19];
   var answer_7 = user[20];
   var q_no8 = user[21];
   var q_total_no8 = user[22];
   var answer_8 = user[23];
   var q_no9 = user[24];
   var q_total_no9 = user[25];
   var answer_9 = user[26];
   var q_no10 = user[27];
   var q_total_no10 = user[28];
   var answer_10 = user[29];

   $.ajax({
     url: "server.php",
     type: "post",
     async: false,
     data: {
       "done": 1,
       "q_no1": q_no1,
       "q_total_no1": q_total_no1,
       "answer_1": answer_1,
       "q_no2": q_no2,
       "q_total_no2": q_total_no2,
       "answer_2": answer_2,
       "q_no3": q_no3,
       "q_total_no3": q_total_no3,
       "answer_3": answer_3,
       "q_no4": q_no4,
       "q_total_no4": q_total_no4,
       "answer_4": answer_4,
       "q_no5": q_no5,
       "q_total_no5": q_total_no5,
       "answer_5": answer_5,
       "q_no6": q_no6,
       "q_total_no6": q_total_no6,
       "answer_6": answer_6,
       "q_no7": q_no7,
       "q_total_no7": q_total_no7,
       "answer_7": answer_7,
       "q_no8": q_no8,
       "q_total_no8": q_total_no8,
       "answer_8": answer_8,
       "q_no9": q_no9,
       "q_total_no9": q_total_no9,
       "answer_9": answer_9,
       "q_no10": q_no10,
       "q_total_no10": q_total_no10,
       "answer_10": answer_10
     },
   });
}

$("#q_answer1").click(function() {
   SaveinArray("A");
   var $this = $(this);
   var currentNo = $(this).data('no');
   var type = $(this).data('type');
   if (MAX_TYPE_SCORE <= scoreData[type]) {
      return;
   }
   scoreData[type] += 0;
   nextQuestion(currentNo);
 });

 $("#q_answer2").click(function() {
   SaveinArray("B");
   var $this = $(this);
   var currentNo = $(this).data('no');
   var type = $(this).data('type');
   if (MAX_TYPE_SCORE <= scoreData[type]) {
      return;
   }
   scoreData[type] += 1;
   nextQuestion(currentNo);
 });

init();