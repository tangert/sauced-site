//animation directive that takes an SVG as input.
app.directive("animateSvg", animateSvg);

function animateSvg() {    
    return {
        restrict: "E",
        replace: true,
        scope: {
            filePath: '@'
        },
        template: "<img src = {{ filePath }}></img>",
        link: animate
    }
};

function animate(scope, element, attrs) {
    
    
    console.log("Animation called");
};