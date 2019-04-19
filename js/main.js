//25 QUESTIONS ARRAY//
var question = [
   CP = [
      { questionNumber: "1", type: "CP", question: "",  answer1: "周囲から「せっかち」だと言われることが多い", answer2:"周囲から「のんびり屋」だと言われることが多い"},
      { questionNumber: "2", type: "CP", question: "",  answer1: "見栄っ張りだと思う", answer2:"見栄っ張りだとは思わない"},
      { questionNumber: "3", type: "CP", question: "",  answer1: "怒られたり、ムカつくことがあると根に持ってしまう", answer2:"怒られたり、ムカつくことがあっても根に持たない"},
      { questionNumber: "4", type: "CP", question: "",  answer1: "嫌なことがあると弱音・愚痴をつい言ってしまう", answer2:"嫌なことがあっても弱音・愚痴は言わないように努めている"},
      { questionNumber: "5", type: "CP", question: "",  answer1: "相手の遅刻を許せない", answer2:"相手の遅刻を許せる"}
   ],
    NP = [
      { questionNumber: "6", type: "NP", question: "", answer1: "頼み事をされると基本、断れない", answer2:"頼み事をされても、メリットを感じなければ断る"},
      { questionNumber: "7", type: "NP", question: "", answer1: "すぐ泣いてしまうほうだ", answer2:"なかなか泣かないほうだ"},
      { questionNumber: "8", type: "NP", question: "", answer1: "自分は寂しがりやだ", answer2:"自分は寂しがりやではない"},
      { questionNumber: "9", type: "NP", question: "", answer1: "人の幸せな話を聞くほうが好き", answer2:"人の不幸な話を聞くほうが好き"},
      { questionNumber: "10", type: "NP", question: "", answer1: "自分で料理をすることが好き", answer2:"自分で料理をすることが嫌い"}
   ],
   A = [
      { questionNumber: "11", type: "A", question: "", answer1: "「約束の時間」とはその時間より5分前のことだ", answer2:"「約束の時間」とはその時間の通りである"},
      { questionNumber: "12", type: "A", question: "", answer1: "予期せぬ質問を受けた時、うろたえずに返答することができる", answer2:"予期せぬ質問を受けた時、うろたえて言葉につまることが多い"},
      { questionNumber: "13", type: "A", question: "", answer1: "数字を扱うことが得意だ", answer2:"数字を扱うことが苦手だ"},
      { questionNumber: "14", type: "A", question: "", answer1: "交渉ごとが得意だ", answer2:"交渉ごとが苦手だ"},
      { questionNumber: "15", type: "A", question: "", answer1: "アイデアを出すのが得意だ", answer2:"アイデアを出すのが苦手だ"}
   ],
   FC = [
      { questionNumber: "16", type: "FC", question: "", answer1: "勝負事・競争に熱くなりやすい", answer2:"勝負事・競争に熱くならない"},
      { questionNumber: "17", type: "FC", question: "", answer1: "突然の食事の誘いにも応じるなど、フットワークは軽いほうだ", answer2:"突然の食事の誘いは応じることができず、フットワークは軽くないほうだ"},
      { questionNumber: "18", type: "FC", question: "", answer1: "新しいことにチャレンジするのが好きだ（革新的）", answer2:"新しいことにチャレンジするのは苦手だ（保守的）"},
      { questionNumber: "19", type: "FC", question: "", answer1: "自分は運がいいほうだ", answer2:"自分は運が悪いほうだ"},
      { questionNumber: "20", type: "FC", question: "", answer1: "流行・トレンドは好き・嫌い関係なく、常に触れる努力をしている", answer2:"流行・トレンドに流されず、自分の良いと思ったものだけに触れることが多い"}
   ],
   AC = [
      { questionNumber: "21", type: "AC", question: "", answer1: "ランチの時、なかなか注文を決められない", answer2:"ランチの時、すぐに注文を決められる"},
      { questionNumber: "22", type: "AC", question: "", answer1: "やりたくないことは後回しにするほうだ", answer2:"やりたくないことは先に済ませてしまうほうだ"},
      { questionNumber: "23", type: "AC", question: "", answer1: "ストレスは溜め込むほうである", answer2:"ストレスはすぐに発散するほうである"},
      { questionNumber: "24", type: "AC", question: "", answer1: "飲み会のお金は全員均等に払うべきだ", answer2:"飲み会のお金は払える人がより多く払うべきだ"},
      { questionNumber: "25", type: "AC", question: "", answer1: "会議・打ち合わせでは議事録などサポート業務にまわるほうだ", answer2:"会議・打ち合わせでは積極的に発言するほうだ"}
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
    html+="<div class='total_no'>"+finalQuestions[i].questionNumber+"</div>";
    html+="<div class='type'>"+finalQuestions[i].type+"</div>";
    html+="<div class='question'>"+finalQuestions[i].question+"</div>";
    html+="<div class='answer1'>"+finalQuestions[i].answer1+"</div>";
    html+="<div class='answer2'>"+finalQuestions[i].answer2+"</div>";
    html+="</div>";
}
document.getElementById("data_area").innerHTML = html;
//GET THE 10 QUESTIONS//
  var clickedButtonIds = "";
//SHOW THE QUESTIONS IN THE QUIZ ORDERLY//
$(function(){
   const MAX_QUESTION_NO = 10;
   const MAX_TYPE_SCORE = 2;
   var $qNo = $('#q_no');
   var $TotalNo = $('#total_no');
   var $qAnswer1 = $('#q_answer1');
   var $qAnswer2 = $('#q_answer2');
   var $qProgressBar = $('#q_progress_bar');
   var $qProgressNo = $('#q_progress_no');
   var scoreData = [];
   var $form = $('form[name=ResultForm]');

   var List = [];
   function init() {
      $('.diacrisis_data').each(function(i, elem) {
         var $this = $(this);
         var No = $('.no', $this).text();
         var Type = $('.type', $this).text();
         var TotalNumber = $('.total_number', $this).text();
         var Answer1 = $('.answer1', $this).text();
         var Answer2 = $('.answer2', $this).text();

         List[No] = {
            'Type': Type,
            'TotalNumber': TotalNumber,
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
         $form.append('<input type="hidden" name="score_level" value="' + scoreLevel + '">');
         $form.submit();

         return false;
      }

      setupQuestion(currentNo + 1);
   }

   function setupQuestion(no) {
      $qNo.text(no);
      $TotalNo.text(List[no].TotalNumber);
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
  

    $qAnswer1.click(function () {
      var q_no = document.getElementById("q_no").innerHTML; 
      var main_no = document.getElementById("total_no").innerHTML;
      var q_answer1 = document.getElementById("q_answer1").childNodes[0].innerHTML;
      console.log(q_no, main_no, q_answer1);
     
      var $this = $(this);
      var currentNo = $(this).data('no');
      var type = $(this).data('type');
      if (MAX_TYPE_SCORE <= scoreData[type]) {
         return;
      }
      scoreData[type] += 0;
      nextQuestion(currentNo);
    });

    $qAnswer2.click(function () {
      var q_no = document.getElementById("q_no").innerHTML;
      var q_answer2 = document.getElementById("q_answer2").childNodes[0].innerHTML;
      console.log(q_no, q_answer2);

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
});
