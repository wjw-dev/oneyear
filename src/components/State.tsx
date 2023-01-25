

export class State
{
    picture: string;
    text: string;

    constructor(picture: string, text: string)
    {
        this.picture = picture;
        this.text = text;
    }
}

export class StateMachine
{
    states: State[] = [];
    iterator: number = 0;

    addState(newState : State)
    {
        this.states.push(newState);
    }

    getState()
    {
        return this.states[this.iterator];
    }

    prev()
    {
        if(this.iterator > 0) this.iterator--;
        
    }

    next()
    {
        if(this.iterator < this.states.length )
        { 
            this.iterator++;
        }
    }

    hasNext()
    {
        return this.iterator < this.states.length-1;
    }

    reset()
    {
        this.iterator = 0;
    }
}