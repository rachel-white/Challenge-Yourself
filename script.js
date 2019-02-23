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
    ]

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
    "Difficult situation with someone at work",
    "Relationships not as you would like them to be",
    "Character traits you want to change",
    "Being more motivated",
    "Being overwhelmed with stress",
    "Not eating well",
    "Global Health", 
    "Poverty",
    "Natural Disasters",
    "Organ Donation",
    "Kids not receiving education",
    "Global Warming",
    "Discrimination", 
    "Crime",
    "Volunteering",
    "Dealing with complicated beurocracies"
    ]

function generateChallenge() {
    //Saving inputted data:
    var addedProblems = document.getElementById("added-problems").value;
    var sortedProblems, sortedMentalModels;
        
        function sortInput(data, sortedDataVar) {
            if (!(data == "")) {
                if (data.includes(",")) {
                    sortedDataVar = data.split(",");
                } else {
                    sortedDataVar = [];
                    sortedDataVar.push(data);
                }
            } else {
                console.log("data was null");
            }
        }
 
    sortInput(addedProblems, sortedProblems);
    
 //within these functions create extendedMMarray or extendedProblemsArray and that includes the inputted things. 
        function generateMentalModels(numberSelected) {
            $('#generated-mental-models').empty();
            for (var i = 0; i <numberSelected; i++) {
                var k = Math.floor((Math.random() * mentalModels.length));
                console.log(mentalModels[k]);
                $("#generated-mental-models").append(`<div class="generated-model">${mentalModels[k]}</div>`)
            }
        }
        
        function generateProblems(numberSelected) {
            $('#generated-problems').empty();
            for (var i = 0; i <numberSelected; i++) {
                var k = Math.floor((Math.random() * problems.length));
                console.log(problems);
                console.log(problems[k]);
                $("#generated-problems").append(
                    `<div class="generated-problem">${problems[k]}</div>`
                    )
            }
        }
        
        var numberOfModelsSelected = $('input[name=mental-models-number]:checked', '#number-input-mental-models').val();
        var numberOfProblemsSelected = $('input[name=problem-number]:checked', '#number-input-problems').val();
        generateMentalModels(numberOfModelsSelected);
        generateProblems(numberOfProblemsSelected);
}
