$(document).ready(function(){
  $('.circle').click(function(){
    var target = $(this);
    var parentContainer = target.closest(".question-wrap");
    parentContainer.find(".circle").removeClass("selected");
    var value = parseInt(target.text());
    parentContainer.find("input").val(value);
    parentContainer.find(".check").removeClass("hide");
    target.addClass("selected");
    if (allComplete()) {
      showScore();
    }
  })

})
function allComplete(){
  var countSelected = $('.circle.selected').length;
  var totalCount = $('.question-wrap').length;
  return totalCount == countSelected;
}

function showScore() {
  var score = 0;
  $("input").each(function(){
    score += parseInt(this.value);
  })
  $("#number").text(score);
  var type = romanize(getSkinType(score));
  $("#skinType").text(type);
  $('.result').removeClass('hide');
}

function getSkinType(score) {
  return Math.floor(score/7) + 1;
}

function romanize(number) {
  var numeral = "";
  switch (number) {
    case 6: return "VI";
    case 5: return "V";
    case 4: return "IV";
    case 3: return "III";
    case 2: return "II";
    case 1: return "I";
  }
}
