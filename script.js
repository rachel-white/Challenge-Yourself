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
    
var usedProblems = [];
var usedMentalModels = [];
var addedProblems;
var responses;
var emailAddress;

function saveVarsOnSendButtonClick() {
    responses = document.getElementById("responses").value;
    emailAddress = document.getElementById("email-address").value;
}

function displayTitles() {
   $(".title-mm").html(`<p class="title">Mental Models</p>`);
   $(".title-problems").html(`<p class="title">Problems</p>`);  
}

function generateChallenge(){
    //Saving inputted data:
    //code from: https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button - this line: document.querySelector('input[name="rate"]:checked').value;
    var numberOfModelsSelected = document.querySelector('input[name="mental-model-number"]:checked').value;
    var numberOfProblemsSelected = document.querySelector('input[name="problem-number"]:checked').value;
    usedMentalModels = [];
    usedProblems = [];
        
    function generateMentalModels(number) {
            document.getElementById('generated-mental-models').innerHTML="";
            for (var i = 0; i < number; i++) {
                var k = Math.floor((Math.random() * mentalModels.length));
              $("#generated-mental-models").append(`<div class="generated-model term">${mentalModels[k][0]}</div>`);
              $("#generated-mental-models").append(`<div class="generated-model definition">${mentalModels[k][1]}</div>`);
              usedMentalModels.push(`${mentalModels[k]}`);
            }
        }
        
    function generateProblems(numberSelected) {
        document.getElementById('generated-problems').innerHTML="";
        addedProblems = [];
        var inputtedProblems = document.getElementsByClassName("added-problems");
        for (var p = 0; p < inputtedProblems.length; p++) {
            addedProblems.push(inputtedProblems[p].value);
        }
        if (addedProblems == undefined || addedProblems == "") {
            for (var i = 0; i < numberSelected; i++) {
                var q = Math.floor((Math.random() * problems.length));
                $("#generated-problems").append(`<div class="generated-model">${problems[q]}</div>`);
                usedProblems.push(`${problems[q]}`);
                }
        } else {
            for (var t = 0; t < addedProblems.length; t++) {
                $("#generated-problems").append(`<div class="generated-model">${addedProblems[t]}</div>`);
                usedProblems.push(`${addedProblems[t]}`);
            }
            }
        }
        
    displayTitles();
    generateMentalModels(numberOfModelsSelected);
    generateProblems(numberOfProblemsSelected);
}

function addInputArea() {
     $("#text-input-problems").append(
    `<input type="text" name="problems"
      class="full-width-input added-problems">`);
}