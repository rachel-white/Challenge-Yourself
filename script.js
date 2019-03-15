var mentalModels = [
    ["First Principles Thinking", "Separating the underlying ideas or facts from any assumptions based on them. What remains are the essentials."],
    ["Second Order Thinking", "Consider the effects of your actions, then the effects of those effect."],
    ["Inversion","approach the situation from the opposite end of the natural starting point. Think backwards."],
    ["Compounding","The process of adding interest to a fixed sum, then earning interest on the previous sum and the newly added interest,and so on."],
    ["Multiplying by Zero", "Failure in one area overshadowing smaller errors elsewhere."],
    ["Diversification","Allocating capital in a way that reduces the exposure to any one particular asset or risk."],
    ["Incentive","Typically, an external motivator to reward an action that leads to the desired outcome."],
    ["Supply and Demand","the amount of a commodity, product, or service available and the desire of buyers for it, considered as factors regulating its price."],
    ["Anchoring"," a cognitive bias where an individual relies too heavily on an initial piece of information offered when making decisions."],
    ["Classical Conditioning","Training a neutral stimulus to ilicit a positive response, through association with a positive stimulus."],
    ["Loss Aversion","The preference to avoid a loss than to acheive a gain."],
    ["Maslow's Hierachy of Needs","Hierachy of motivations of behaviour."],
    ["Mere Exposure Effect","Preference among people to things they are familiar with."],
    ["Operant Conditioning","Learning process through reinforcement or punishment, to change a behaviour and/or its strength."],
    ["Norm of Reciprocity","Repaying others for what they do for us."],
    ["Survivorship Bias","Overlooking ideas or people or things which have not succeeded in a selection procedure, because of their lack of visibility."],
    ["Backward Reasoning","Work backwards from the goal."],
    ["Activation Energy","The energy required to start a process / reaction."],
    ["Pareto Principle","A small amount of some phenomenon will produce disproportiate results / be disproportionately succcessful."],
    ["Alloying","Combination of the parts can be better than simple understanding would predict."],
    ["Exaptation","The development of a trait / feature which is later used for something other than its original purpose."],
    ["Availability Heuristic","Better recall of what is recent, frequent, important."],
    ["Leverage","Amplificating a force by using a tool, mechanical device, or machine system."],
    ["First Conclusion Bias","Tendency to settle on the first conclusion."],
    ["Opportunity Costs","Doing one thing means not being able to do another, with the resources and time used for that option."]
    ];

var problems = [
    "Lack of neighbourhood cohesion", 
    "Traffic on the way to work",
    "Safety at night in cities", 
    "Urban Isolation",
    "Unreliable public transport",
    "Leisure plans",
    "Distances to travel for commodities",
    "Procrastinating on projects you want to acheive.",
    "Procrastinating at work",
    "Not eating well",
    "Global Health", 
    "Poverty",
    "Natural Disasters",
    "Organ Donation",
    "Kids not receiving education",
    "Global Warming",
    "Discrimination", 
    "Crime",
    "Volunteering"
    ];
    
function displayTitles() {
    
    //$(".mental-models-section").append(`<p class="title">Mental Models</p>`);
   // $(".problems-section").append(`<p class="title">Problems</p>`);
   $(".title-mm").html(`<p class="title">Mental Models</p>`);
   $(".title-problems").html(`<p class="title">Problems</p>`);
}

function generateChallenge(){
    console.log("is this reached - generateChallenge function");
    //Saving inputted data:
    //var numberOfModelsSelected = $('input[name=mental-models-number]:checked', '#number-input-mental-models').val();
    var numberOfModelsSelected = document.querySelector('input[name="mental-model-number"]:checked').value;
    var numberOfProblemsSelected = document.querySelector('input[name="problem-number"]:checked').value;
        
    function generateMentalModels(number) {
            console.log("is this reached - generate MM function");
            //$('#generated-mental-models').empty();
            document.getElementById('generated-mental-models').innerHTML="";
            console.log(number);
            for (var i = 0; i < number; i++) {
                var k;
                k = Math.floor((Math.random() * mentalModels.length));
                console.log("this is k" + k);
                var firstMM = mentalModels[k];
                console.log("this is firstMM" + firstMM);
               $("#generated-mental-models").html(`<div class="generated-model">${mentalModels[k]}</div>`);
                //issue of adding to dynamically created jquery element.
            }
        }
        
        function generateProblems(numberSelected) {
            console.log("is this reached - geneate problems function");
             $('#generated-problems').empty();
                for (var i = 0; i <numberSelected; i++) {
                    if (addedProblems == "") {
                        var k = Math.floor((Math.random() * problems.length));
                        $("#generated-problems").append(`<div class="generated-problem">${problems[k]}</div>`);
                    } else {
                        console.log("is this reached");
                       var problemsExtended = problems.concat(sortedProblems);
                        console.log(problemsExtended);
                        var j = Math.floor((Math.random() * problemsExtended.length));
                        $("#generated-problems").append(`<div class="generated-problem">${problemsExtended[j]}</div>`);
                    }
                }
        }
        
        displayTitles();
        generateMentalModels(numberOfModelsSelected);
       // generateProblems(numberOfProblemsSelected);
}

function addInputArea() {
     $("#text-input-problems").append(
    `<input type="text" name="problems"
      class="full-width-input added-problems">`);
}

function storeInputs() {
    if (!($(".add-input").value == "")) {
        var storedInputs = [];
        storedInputs.push($(".add-input").value);
        console.log(storedInputs);
    } return storedInputs;
}

$(".add-input").click(function(){
 addInputArea();
 storeInputs();
});

function emailResponses() {
    var responses = $("#responses").val();
}