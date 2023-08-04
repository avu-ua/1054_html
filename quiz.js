const q2 = "Who knows well errors 404, 403, 500 etc.?";
const q3 = "What the language Yoda spoke sounded like?";
const q4 = "What does expression 'Yoda conditions' mean?";
const questions = ["", "", q2, q3, q4];

const q2_imgs = ["img/404.png", "img/baby-yoda1.png", "img/einstein.png", "img/cat-prog.jpg"];
const q3_imgs = ["img/lang.png", "img/chinese.png", "img/js.png", "img/sardinia.png"];
const q4_imgs = ["img/e-yoda.png", "img/healthy.png", "img/yoda_at_pc.png", "img/progr_style.png"];
const images = [0, 0, q2_imgs, q3_imgs, q4_imgs];

const q2_values = [2264, 4426, 5689];
const q3_values = [1040, 5796, 5797];
const q4_values = [1368, 9852, 9999];
const values = [0, 0, q2_values, q3_values, q4_values];

const q2_options = ["Baby Yoda", "Albert Einstein", "Cat"];
const q3_options = ["Mandarin spoken by Italian man", "JavaScript spoken by a Chinese man", "Sardinian accent of Italian"];
const q4_options = ["Special lifestyle conditions", "Special learning environment", "Special programming style"];
const options = ["", "", q2_options, q3_options, q4_options];

const q2_answer = "See http.cat";
const q3_answer = "Italians sought Yoda spoke with Sardinian accent";
const q4_answer = "It is a special programming style (where the two parts of an expression are reversed from the typical order in a conditional statement";
const answers = ["", "", q2_answer, q3_answer, q4_answer];

var question_answered = 0;
var answer_section = document.getElementById("answer_section");
var submit_btn = document.getElementById("submit_btn");
var answer_mark = document.getElementById("answer_mark");
var question_number = document.getElementById("question_number");
var answer_exlpained = document.getElementById("answer_exlpained");
var correct_answers = 0;

var q_img = document.getElementById("q_img");
var q_phrase = document.getElementById("q_phrase");

var opt1_img = document.getElementById("opt1_img");
var opt1_inp = document.getElementById("opt1_inp");
var opt1_lbl = document.getElementById("opt1_lbl");

var opt2_img = document.getElementById("opt2_img");
var opt2_inp = document.getElementById("opt2_inp");
var opt2_lbl = document.getElementById("opt2_lbl");

var opt3_img = document.getElementById("opt3_img");
var opt3_inp = document.getElementById("opt3_inp");
var opt3_lbl = document.getElementById("opt3_lbl");

function submit_q(e) {
    e.preventDefault();    
    question_answered += 1;
    if (question_answered == 4) {
        document.getElementById("btn_to_next_q").innerHTML="Finish";
    }
    answer_section.style.display="initial";
    

    var q_data = new FormData(document.getElementById("q_form"));
    var q_response = q_data.get("response");
    
    submit_btn.style.visibility = "hidden";

    if(q_response % 2 == 0) {
        answer_mark.style.color = "red";
        answer_mark.innerHTML = "Not quite..."
    } else {
        answer_mark.style.color = "white";
        answer_mark.innerHTML = "Bravo!";
        correct_answers += 1;
    }

    opt1_inp.disabled=true;
    opt2_inp.disabled=true;
    opt3_inp.disabled=true;
}

function next(e) {
    answer_section.style.display="none";
    if(question_answered < 4) {
        answer_exlpained.innerHTML = answers[question_answered + 1];
        submit_btn.style.visibility="visible";

        question_number.innerHTML = question_answered + 1;

        q_img.src = images[question_answered + 1][0];
        q_phrase.innerHTML = questions[question_answered + 1];

        opt1_img.src = images[question_answered + 1][1];
        opt1_inp.value = values[question_answered + 1][0];
        opt1_inp.disabled=false;
        opt1_inp.checked = false;
        opt1_lbl.innerHTML = options[question_answered + 1][0];

        opt2_img.src = images[question_answered + 1][2];
        opt2_inp.value = values[question_answered + 1][1];
        opt2_inp.disabled=false;
        opt2_inp.checked = false;
        opt2_lbl.innerHTML = options[question_answered + 1][1];

        opt3_img.src = images[question_answered + 1][3];
        opt3_inp.value = values[question_answered + 1][2];
        opt3_inp.disabled=false;
        opt3_inp.checked = false;
        opt3_lbl.innerHTML = options[question_answered + 1][2];
    } else {
        var qs_section = document.getElementById("qs_section");
        var quiz_end = document.getElementById("quiz_end");
        var correct = document.getElementById("correct");
        qs_section.style.display="none";
        correct.innerHTML = correct_answers;
        quiz_end.style.display="initial";
    }
}