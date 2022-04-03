function Monday() {
    console.log('Go for a five-mile run')
    console.log('Pump iron')
}

function Tuesday() {
    console.log('Go for a five-mile run')
    console.log('Swim 40 laps')
}

function Wednesday() {
    console.log('Go for a five-mile run')
    console.log('Go for a five-mile run')
}

function Thursday() {
    console.log('Go for a five-mile run')
    console.log('Pump iron')
}

function Friday() {
    console.log('Go for a five-mile run')
    console.log('Swim 40')
}

function runFiveMiles() {
    console.log('Go for a five-mile run')
}

function liftWeights() {
    console.log('Pump iron')
}

function swimForty() {
    console.log('Swim 40 laps')
}

/*function callable() {
    return "Did you call me?"
}*/


function receivesAFunction(echoLocate) {
    return echoLocate()
}

function returnsANamedFunction() {
    return function callable(){
        return 'Did you call me?'
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('Wow you found me!')
}