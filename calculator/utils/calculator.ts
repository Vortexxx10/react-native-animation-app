export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
};

export const handleNumber = ({ value, state }: any) => {
    if (state.currentValue === "0") {
        return { currentValue: `${value}` };
    }

    return {
        currentValue: `${state.currentValue}${value}`,
    };
};

const handleEqual = (state: any) => {
    const { currentValue, previousValue, operator } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };

    switch (operator) {
        case "+":
            return {
                currentValue: `${previous + current}`,
                ...resetState,
            };
        case "-":
            return {
                currentValue: `${previous - current}`,
                ...resetState,
            };
        case "*":
            return {
                currentValue: `${previous * current}`,
                ...resetState,
            };
        case "/":
            return {
                currentValue: `${previous / current}`,
                ...resetState,
            };

        default:
            return state;
    }
};

interface Calculator {
    type?: any;
    value?:  any;
    state? : any;
}

// calculator function
const calculator = ({ type, value, state }: Calculator) => {
    switch (type) {
        case "number":
            return handleNumber(value);//state like param for handleNumber
        case "clear":
            return initialState;
        case "posneg":
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`,
            };
        case "percentage":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`,
            };
        case "operator":
            return {
                operator: value,
                previousValue: state.currentValue,
                currentValue: "0",
            };
        case "equal":
            return handleEqual(state);
        default:
            return state;
    }
};

export default calculator;